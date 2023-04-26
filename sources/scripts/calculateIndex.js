export default function (data) {
  const nuclearRenewable = !!+document.querySelector(
    'input[name="method"]:checked'
  ).value;

  const conventionalSources = nuclearRenewable
    ? "coal oil"
    : "coal oil nuclear gas";
  const renewableSources = nuclearRenewable
    ? "wind solar other_renewables hydro_power nuclear gas"
    : "wind solar other_renewables hydro_power";
  let r = 0;
  let c = 0;

  for (let [k, { value: v }] of Object.entries(data)) {
    if (conventionalSources.includes(k)) c += v;
    else r += v;
  }

  return Math.round((c / (r || 1)) * 100) / 100 || 0;
}
