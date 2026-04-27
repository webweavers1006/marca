-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 27-04-2026 a las 04:01:01
-- Versión del servidor: 8.4.6-6
-- Versión de PHP: 8.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db0uutlw2ndyjl`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `id` int UNSIGNED NOT NULL,
  `pais` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `codigo` int NOT NULL,
  `id_condicion` int UNSIGNED DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`id`, `pais`, `codigo`, `id_condicion`, `created`, `updated`) VALUES
(1, 'Australia', 61, 1, '2024-01-24 19:59:06', NULL),
(2, 'Austria', 43, 1, '2024-01-24 19:59:06', NULL),
(3, 'Azerbaiyán', 994, 1, '2024-01-24 19:59:06', NULL),
(4, 'Anguilla', 1, 1, '2024-01-24 19:59:06', NULL),
(5, 'Argentina', 54, 1, '2024-01-24 19:59:06', NULL),
(6, 'Armenia', 374, 1, '2024-01-24 19:59:06', NULL),
(7, 'Bielorrusia', 375, 1, '2024-01-24 19:59:06', NULL),
(8, 'Belice', 501, 1, '2024-01-24 19:59:06', NULL),
(9, 'Bélgica', 32, 1, '2024-01-24 19:59:06', NULL),
(10, 'Bermudas', 0, 1, '2024-01-24 19:59:06', NULL),
(11, 'Bulgaria', 359, 1, '2024-01-24 19:59:06', NULL),
(12, 'Brasil', 55, 1, '2024-01-24 19:59:06', NULL),
(13, 'Reino Unido', 44, 1, '2024-01-24 19:59:06', NULL),
(14, 'Hungría', 36, 1, '2024-01-24 19:59:06', NULL),
(15, 'Vietnam', 84, 1, '2024-01-24 19:59:06', NULL),
(16, 'Haiti', 509, 1, '2024-01-24 19:59:06', NULL),
(17, 'Guadalupe', 590, 1, '2024-01-24 19:59:06', NULL),
(18, 'Alemania', 49, 1, '2024-01-24 19:59:06', NULL),
(19, 'Países Bajos, Holanda', 0, 1, '2024-01-24 19:59:06', NULL),
(20, 'Grecia', 30, 1, '2024-01-24 19:59:06', NULL),
(21, 'Georgia', 995, 1, '2024-01-24 19:59:06', NULL),
(22, 'Dinamarca', 45, 1, '2024-01-24 19:59:06', NULL),
(23, 'Egipto', 20, 1, '2024-01-24 19:59:06', NULL),
(24, 'Israel', 972, 1, '2024-01-24 19:59:06', NULL),
(25, 'India', 91, 1, '2024-01-24 19:59:06', NULL),
(26, 'Irán', 98, 1, '2024-01-24 19:59:06', NULL),
(27, 'Irlanda', 353, 1, '2024-01-24 19:59:06', NULL),
(28, 'España', 34, 1, '2024-01-24 19:59:06', NULL),
(29, 'Italia', 39, 1, '2024-01-24 19:59:06', NULL),
(30, 'Kazajstán', 0, 1, '2024-01-24 19:59:06', NULL),
(31, 'Camerún', 237, 1, '2024-01-24 19:59:06', NULL),
(32, 'Canadá', 1, 1, '2024-01-24 19:59:06', NULL),
(33, 'Chipre', 357, 1, '2024-01-24 19:59:06', NULL),
(34, 'Kirguistán', 996, 1, '2024-01-24 19:59:06', NULL),
(35, 'China', 86, 1, '2024-01-24 19:59:06', NULL),
(36, 'Costa Rica', 506, 1, '2024-01-24 19:59:06', NULL),
(37, 'Kuwait', 965, 1, '2024-01-24 19:59:06', NULL),
(38, 'Letonia', 371, 1, '2024-01-24 19:59:06', NULL),
(39, 'Libia', 218, 1, '2024-01-24 19:59:06', NULL),
(40, 'Lituania', 370, 1, '2024-01-24 19:59:06', NULL),
(41, 'Luxemburgo', 352, 1, '2024-01-24 19:59:06', NULL),
(42, 'México', 52, 1, '2024-01-24 19:59:06', NULL),
(43, 'Moldavia', 373, 1, '2024-01-24 19:59:06', NULL),
(44, 'Mónaco', 377, 1, '2024-01-24 19:59:06', NULL),
(45, 'Nueva Zelanda', 64, 1, '2024-01-24 19:59:06', NULL),
(46, 'Noruega', 47, 1, '2024-01-24 19:59:06', NULL),
(47, 'Polonia', 48, 1, '2024-01-24 19:59:06', NULL),
(48, 'Portugal', 351, 1, '2024-01-24 19:59:06', NULL),
(49, 'Reunión', 262, 1, '2024-01-24 19:59:06', NULL),
(50, 'Rusia', 7, 1, '2024-01-24 19:59:06', NULL),
(51, 'El Salvador', 503, 1, '2024-01-24 19:59:06', NULL),
(52, 'Eslovaquia', 421, 1, '2024-01-24 19:59:06', NULL),
(53, 'Eslovenia', 386, 1, '2024-01-24 19:59:06', NULL),
(54, 'Surinam', 597, 1, '2024-01-24 19:59:06', NULL),
(55, 'Estados Unidos', 0, 1, '2024-01-24 19:59:06', NULL),
(56, 'Tadjikistan', 0, 1, '2024-01-24 19:59:06', NULL),
(57, 'Turkmenistan', 993, 1, '2024-01-24 19:59:06', NULL),
(58, 'Islas Turcas y Caicos', 1, 1, '2024-01-24 19:59:06', NULL),
(59, 'Turquía', 90, 1, '2024-01-24 19:59:06', NULL),
(60, 'Uganda', 256, 1, '2024-01-24 19:59:06', NULL),
(61, 'Uzbekistán', 998, 1, '2024-01-24 19:59:06', NULL),
(62, 'Ucrania', 380, 1, '2024-01-24 19:59:06', NULL),
(63, 'Finlandia', 358, 1, '2024-01-24 19:59:06', NULL),
(64, 'Francia', 33, 1, '2024-01-24 19:59:06', NULL),
(65, 'República Checa', 420, 1, '2024-01-24 19:59:06', NULL),
(66, 'Suiza', 41, 1, '2024-01-24 19:59:06', NULL),
(67, 'Suecia', 46, 1, '2024-01-24 19:59:06', NULL),
(68, 'Estonia', 372, 1, '2024-01-24 19:59:06', NULL),
(69, 'Corea del Sur', 82, 1, '2024-01-24 19:59:06', NULL),
(70, 'Japón', 81, 1, '2024-01-24 19:59:06', NULL),
(71, 'Croacia', 385, 1, '2024-01-24 19:59:06', NULL),
(72, 'Rumanía', 40, 1, '2024-01-24 19:59:06', NULL),
(73, 'Hong Kong', 852, 1, '2024-01-24 19:59:06', NULL),
(74, 'Indonesia', 62, 1, '2024-01-24 19:59:06', NULL),
(75, 'Jordania', 962, 1, '2024-01-24 19:59:06', NULL),
(76, 'Malasia', 60, 1, '2024-01-24 19:59:06', NULL),
(77, 'Singapur', 65, 1, '2024-01-24 19:59:06', NULL),
(78, 'Taiwan', 886, 1, '2024-01-24 19:59:06', NULL),
(79, 'Bosnia y Herzegovina', 387, 1, '2024-01-24 19:59:06', NULL),
(80, 'Bahamas', 1, 1, '2024-01-24 19:59:06', NULL),
(81, 'Chile', 56, 1, '2024-01-24 19:59:06', NULL),
(82, 'Colombia', 57, 1, '2024-01-24 19:59:06', NULL),
(83, 'Islandia', 354, 1, '2024-01-24 19:59:06', NULL),
(84, 'Corea del Norte', 850, 1, '2024-01-24 19:59:06', NULL),
(85, 'Macedonia', 389, 1, '2024-01-24 19:59:06', NULL),
(86, 'Malta', 356, 1, '2024-01-24 19:59:06', NULL),
(87, 'Pakistán', 92, 1, '2024-01-24 19:59:06', NULL),
(88, 'Papúa-Nueva Guinea', 0, 1, '2024-01-24 19:59:06', NULL),
(89, 'Perú', 51, 1, '2024-01-24 19:59:06', NULL),
(90, 'Filipinas', 63, 1, '2024-01-24 19:59:06', NULL),
(91, 'Arabia Saudita', 966, 1, '2024-01-24 19:59:06', NULL),
(92, 'Tailandia', 66, 1, '2024-01-24 19:59:06', NULL),
(93, 'Emiratos Árabes Unidos', 971, 1, '2024-01-24 19:59:06', NULL),
(94, 'Groenlandia', 299, 1, '2024-01-24 19:59:06', NULL),
(95, 'Venezuela', 58, 1, '2024-01-24 19:59:06', NULL),
(96, 'Zimbabwe', 0, 1, '2024-01-24 19:59:06', NULL),
(97, 'Kenia', 254, 1, '2024-01-24 19:59:06', NULL),
(98, 'Algeria', 0, 1, '2024-01-24 19:59:06', NULL),
(99, 'Líbano', 961, 1, '2024-01-24 19:59:06', NULL),
(100, 'Botsuana', 267, 1, '2024-01-24 19:59:06', NULL),
(101, 'Tanzania', 255, 1, '2024-01-24 19:59:06', NULL),
(102, 'Namibia', 264, 1, '2024-01-24 19:59:06', NULL),
(103, 'Ecuador', 593, 1, '2024-01-24 19:59:06', NULL),
(104, 'Marruecos', 212, 1, '2024-01-24 19:59:06', NULL),
(105, 'Ghana', 233, 1, '2024-01-24 19:59:06', NULL),
(106, 'Siria', 963, 1, '2024-01-24 19:59:06', NULL),
(107, 'Nepal', 977, 1, '2024-01-24 19:59:06', NULL),
(108, 'Mauritania', 222, 1, '2024-01-24 19:59:06', NULL),
(109, 'Seychelles', 248, 1, '2024-01-24 19:59:06', NULL),
(110, 'Paraguay', 595, 1, '2024-01-24 19:59:06', NULL),
(111, 'Uruguay', 598, 1, '2024-01-24 19:59:06', NULL),
(112, 'Congo (Brazzaville)', 0, 1, '2024-01-24 19:59:06', NULL),
(113, 'Cuba', 53, 1, '2024-01-24 19:59:06', NULL),
(114, 'Albania', 355, 1, '2024-01-24 19:59:06', NULL),
(115, 'Nigeria', 234, 1, '2024-01-24 19:59:06', NULL),
(116, 'Zambia', 260, 1, '2024-01-24 19:59:06', NULL),
(117, 'Mozambique', 258, 1, '2024-01-24 19:59:06', NULL),
(119, 'Angola', 244, 1, '2024-01-24 19:59:06', NULL),
(120, 'Sri Lanka', 94, 1, '2024-01-24 19:59:06', NULL),
(121, 'Etiopía', 251, 1, '2024-01-24 19:59:06', NULL),
(122, 'Túnez', 216, 1, '2024-01-24 19:59:06', NULL),
(123, 'Bolivia', 591, 1, '2024-01-24 19:59:06', NULL),
(124, 'Panamá', 507, 1, '2024-01-24 19:59:06', NULL),
(125, 'Malawi', 265, 1, '2024-01-24 19:59:06', NULL),
(126, 'Liechtenstein', 423, 1, '2024-01-24 19:59:06', NULL),
(127, 'Bahrein', 973, 1, '2024-01-24 19:59:06', NULL),
(128, 'Barbados', 1, 1, '2024-01-24 19:59:06', NULL),
(130, 'Chad', 235, 1, '2024-01-24 19:59:06', NULL),
(131, 'Man, Isla de', 0, 1, '2024-01-24 19:59:06', NULL),
(132, 'Jamaica', 1, 1, '2024-01-24 19:59:06', NULL),
(133, 'Malí', 223, 1, '2024-01-24 19:59:06', NULL),
(134, 'Madagascar', 261, 1, '2024-01-24 19:59:06', NULL),
(135, 'Senegal', 221, 1, '2024-01-24 19:59:06', NULL),
(136, 'Togo', 228, 1, '2024-01-24 19:59:06', NULL),
(137, 'Honduras', 504, 1, '2024-01-24 19:59:06', NULL),
(138, 'República Dominicana', 1, 1, '2024-01-24 19:59:06', NULL),
(139, 'Mongolia', 976, 1, '2024-01-24 19:59:06', NULL),
(140, 'Irak', 964, 1, '2024-01-24 19:59:06', NULL),
(141, 'Sudáfrica', 27, 1, '2024-01-24 19:59:06', NULL),
(142, 'Aruba', 297, 1, '2024-01-24 19:59:06', NULL),
(143, 'Gibraltar', 350, 1, '2024-01-24 19:59:06', NULL),
(144, 'Afganistán', 93, 1, '2024-01-24 19:59:06', NULL),
(145, 'Andorra', 376, 1, '2024-01-24 19:59:06', NULL),
(147, 'Antigua y Barbuda', 1, 1, '2024-01-24 19:59:06', NULL),
(149, 'Bangladesh', 880, 1, '2024-01-24 19:59:06', NULL),
(151, 'Benín', 229, 1, '2024-01-24 19:59:06', NULL),
(152, 'Bután', 0, 1, '2024-01-24 19:59:06', NULL),
(154, 'Islas Virgenes Británicas', 1, 1, '2024-01-24 19:59:06', NULL),
(155, 'Brunéi', 673, 1, '2024-01-24 19:59:06', NULL),
(156, 'Burkina Faso', 226, 1, '2024-01-24 19:59:06', NULL),
(157, 'Burundi', 257, 1, '2024-01-24 19:59:06', NULL),
(158, 'Camboya', 855, 1, '2024-01-24 19:59:06', NULL),
(159, 'Cabo Verde', 238, 1, '2024-01-24 19:59:06', NULL),
(164, 'Comores', 0, 1, '2024-01-24 19:59:06', NULL),
(165, 'Congo (Kinshasa)', 0, 1, '2024-01-24 19:59:06', NULL),
(166, 'Cook, Islas', 0, 1, '2024-01-24 19:59:06', NULL),
(168, 'Costa de Marfil', 225, 1, '2024-01-24 19:59:06', NULL),
(169, 'Djibouti, Yibuti', 0, 1, '2024-01-24 19:59:06', NULL),
(171, 'Timor Oriental', 670, 1, '2024-01-24 19:59:06', NULL),
(172, 'Guinea Ecuatorial', 240, 1, '2024-01-24 19:59:06', NULL),
(173, 'Eritrea', 291, 1, '2024-01-24 19:59:06', NULL),
(175, 'Feroe, Islas', 0, 1, '2024-01-24 19:59:06', NULL),
(176, 'Fiyi', 679, 1, '2024-01-24 19:59:06', NULL),
(178, 'Polinesia Francesa', 689, 1, '2024-01-24 19:59:06', NULL),
(180, 'Gabón', 241, 1, '2024-01-24 19:59:06', NULL),
(181, 'Gambia', 220, 1, '2024-01-24 19:59:06', NULL),
(184, 'Granada', 1, 1, '2024-01-24 19:59:06', NULL),
(185, 'Guatemala', 502, 1, '2024-01-24 19:59:06', NULL),
(186, 'Guernsey', 44, 1, '2024-01-24 19:59:06', NULL),
(187, 'Guinea', 224, 1, '2024-01-24 19:59:06', NULL),
(188, 'Guinea-Bissau', 245, 1, '2024-01-24 19:59:06', NULL),
(189, 'Guyana', 592, 1, '2024-01-24 19:59:06', NULL),
(193, 'Jersey', 44, 1, '2024-01-24 19:59:06', NULL),
(195, 'Kiribati', 686, 1, '2024-01-24 19:59:06', NULL),
(196, 'Laos', 856, 1, '2024-01-24 19:59:06', NULL),
(197, 'Lesotho', 0, 1, '2024-01-24 19:59:06', NULL),
(198, 'Liberia', 231, 1, '2024-01-24 19:59:06', NULL),
(200, 'Maldivas', 0, 1, '2024-01-24 19:59:06', NULL),
(201, 'Martinica', 596, 1, '2024-01-24 19:59:06', NULL),
(202, 'Mauricio', 230, 1, '2024-01-24 19:59:06', NULL),
(205, 'Myanmar', 0, 1, '2024-01-24 19:59:06', NULL),
(206, 'Nauru', 674, 1, '2024-01-24 19:59:06', NULL),
(207, 'Antillas Holandesas', 0, 1, '2024-01-24 19:59:06', NULL),
(208, 'Nueva Caledonia', 687, 1, '2024-01-24 19:59:06', NULL),
(209, 'Nicaragua', 505, 1, '2024-01-24 19:59:06', NULL),
(210, 'Níger', 227, 1, '2024-01-24 19:59:06', NULL),
(212, 'Norfolk Island', 0, 1, '2024-01-24 19:59:06', NULL),
(213, 'Omán', 968, 1, '2024-01-24 19:59:06', NULL),
(215, 'Isla Pitcairn', 0, 1, '2024-01-24 19:59:06', NULL),
(216, 'Qatar', 974, 1, '2024-01-24 19:59:06', NULL),
(217, 'Ruanda', 250, 1, '2024-01-24 19:59:06', NULL),
(218, 'Santa Elena', 290, 1, '2024-01-24 19:59:06', NULL),
(219, 'San Cristobal y Nevis', 0, 1, '2024-01-24 19:59:06', NULL),
(220, 'Santa Lucía', 1, 1, '2024-01-24 19:59:06', NULL),
(221, 'San Pedro y Miquelón', 508, 1, '2024-01-24 19:59:06', NULL),
(222, 'San Vincente y Granadinas', 0, 1, '2024-01-24 19:59:06', NULL),
(223, 'Samoa', 685, 1, '2024-01-24 19:59:06', NULL),
(224, 'San Marino', 378, 1, '2024-01-24 19:59:06', NULL),
(225, 'San Tomé y Príncipe', 0, 1, '2024-01-24 19:59:06', NULL),
(226, 'Serbia y Montenegro', 0, 1, '2024-01-24 19:59:06', NULL),
(227, 'Sierra Leona', 232, 1, '2024-01-24 19:59:06', NULL),
(228, 'Islas Salomón', 677, 1, '2024-01-24 19:59:06', NULL),
(229, 'Somalia', 252, 1, '2024-01-24 19:59:06', NULL),
(232, 'Sudán', 249, 1, '2024-01-24 19:59:06', NULL),
(234, 'Swazilandia', 268, 1, '2024-01-24 19:59:06', NULL),
(235, 'Tokelau', 690, 1, '2024-01-24 19:59:06', NULL),
(236, 'Tonga', 676, 1, '2024-01-24 19:59:06', NULL),
(237, 'Trinidad y Tobago', 1, 1, '2024-01-24 19:59:06', NULL),
(239, 'Tuvalu', 688, 1, '2024-01-24 19:59:06', NULL),
(240, 'Vanuatu', 678, 1, '2024-01-24 19:59:06', NULL),
(241, 'Wallis y Futuna', 681, 1, '2024-01-24 19:59:06', NULL),
(242, 'Sáhara Occidental', 212, 1, '2024-01-24 19:59:06', NULL),
(243, 'Yemen', 967, 1, '2024-01-24 19:59:06', NULL),
(246, 'Puerto Rico', 1, 1, '2024-01-24 19:59:06', NULL),
(247, 'N/A', 0, 1, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `paises`
--
ALTER TABLE `paises`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_condicion` (`id_condicion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `paises`
--
ALTER TABLE `paises`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=248;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
