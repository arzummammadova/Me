// Decorative clouds for the sky hero band: drifting clouds plus a cloud bank
// along the bottom edge that blends the hero into the white page. Purely visual.
const clouds = [1, 2, 3, 4, 5, 6, 7];
const bank = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function SkyClouds() {
  return (
    <>
      <div className="sky-clouds" aria-hidden="true">
        {clouds.map((n) => (
          <span key={n} className={"sky-cloud sky-cloud-" + n} />
        ))}
      </div>
      <div className="cloud-bank" aria-hidden="true">
        {bank.map((n) => (
          <span key={n} className={"bank-cloud bank-cloud-" + n} />
        ))}
      </div>
    </>
  );
}
