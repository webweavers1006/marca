/**
 * DecorativeCircles — Reusable ambient decorative circles for landing sections.
 * Renders a set of absolutely-positioned blurred circles from a config array.
 *
 * @param {{
 *   circles: Array<{ className: string }>,
 *   className?: string,
 * }} props
 */
export function DecorativeCircles({ circles, className = "" }) {
  if (!circles?.length) return null;

  return (
    <>
      {circles.map((circle, idx) => (
        <div key={idx} className={circle.className} aria-hidden="true" />
      ))}
    </>
  );
}
