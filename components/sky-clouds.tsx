// Decorative drifting clouds behind sky-blue pages. Purely visual.
const clouds = [1, 2, 3, 4, 5, 6, 7];

export function SkyClouds() {
  return (
    <div className="sky-clouds" aria-hidden="true">
      {clouds.map((n) => (
        <span key={n} className={"sky-cloud sky-cloud-" + n} />
      ))}
    </div>
  );
}
