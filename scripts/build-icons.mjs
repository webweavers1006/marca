import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

/**
 * Script inteligente para conversión de SVG a React
 * - Archivos normales: Se convierten a currentColor
 * - Archivos .original.svg: Mantienen sus colores
 */

const args = process.argv.slice(2);
const typeArg = args.find(arg => arg.startsWith('--type='));
const type = typeArg ? typeArg.split('=')[1] : 'icon';

const BASE_INPUT = 'src/assets/svg-raw';
const BASE_OUTPUT = 'src/assets/icons';

const CONFIG = {
  logo: {
    input: path.join(BASE_INPUT, 'logos'),
    output: path.join(BASE_OUTPUT, 'logos'),
  },
  icon: {
    input: path.join(BASE_INPUT, 'icons'),
    output: BASE_OUTPUT,
  }
};

const selected = CONFIG[type] || CONFIG.icon;

// Asegurar carpetas
[selected.input, selected.output].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

console.log(`\n🚀 Procesando [${type.toUpperCase()}]...`);

// 1. Obtener archivos
const allFiles = fs.readdirSync(selected.input).filter(f => f.endsWith('.svg'));

if (allFiles.length === 0) {
  console.log(`⚠️ No se encontraron archivos SVG en ${selected.input}.`);
  process.exit(0);
}

const originalFiles = allFiles.filter(f => f.includes('.original.'));
const standardFiles = allFiles.filter(f => !f.includes('.original.'));

// Función para ejecutar SVGR
const runSvgr = (files, isOriginal) => {
  if (files.length === 0) return;
  
  const tempDir = path.join(selected.input, isOriginal ? '_temp_original' : '_temp_standard');
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
  
  files.forEach(f => fs.copyFileSync(path.join(selected.input, f), path.join(tempDir, f)));
  
  const svgoConfig = isOriginal ? '--no-svgo' : '';
    
  console.log(`   > Procesando ${files.length} archivos ${isOriginal ? 'ORIGINALES' : 'ESTÁNDAR'}...`);
  
  try {
    execSync(`npx @svgr/cli --out-dir ${selected.output} --ext jsx ${svgoConfig} ${tempDir} --no-index`, { stdio: 'inherit' });
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
};

try {
  runSvgr(standardFiles, false);
  runSvgr(originalFiles, true);
  
  // 3. Generar el index.jsx solo si hay archivos en la carpeta de salida
  const outputFiles = fs.readdirSync(selected.output)
    .filter(f => f.endsWith('.jsx') && f !== 'index.jsx')
    .map(f => f.replace('.jsx', ''));
    
  if (outputFiles.length > 0) {
    const indexContent = outputFiles
      .sort()
      .map(name => `export { default as ${name} } from "./${name}";`)
      .join('\n');
      
    fs.writeFileSync(path.join(selected.output, 'index.jsx'), indexContent + '\n');
    console.log(`\n✅ Index generado en ${selected.output} con ${outputFiles.length} componentes.`);
  }
  
  console.log(`\n✨ Proceso finalizado con éxito.\n`);
} catch (error) {
  console.error(`\n❌ Error:`, error.message);
}
