// A few decorative clouds for the sky hero band. Purely visual.
const clouds = [1, 3, 4];

export function SkyClouds() {
  return (
    <div className="sky-clouds" aria-hidden="true">
      {clouds.map((n) => (
        <span key={n} className={"sky-cloud sky-cloud-" + n} />
      ))}
    </div>
  );
}
