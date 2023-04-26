const ctx = document.getElementById("myChart");
let myChart;

export default function createChart(data) {
  ctx.innerHTML = "";
  const labels = [];
  const values = [];
  const backColors = [];

  for (let key of Object.keys(data)) {
    const { value, backColor } = data[key];
    const label =
      key.replace(/_/g, " ")[0].toUpperCase() +
      key.replace(/_/g, " ").substring(1);

    labels.push(label);
    values.push(value);
    backColors.push(backColor);
  }

  const pieChart = {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Energy source (kWh)",
          data: values,
          backgroundColor: backColors,
          hoverOffset: 4,
        },
      ],
    },
  };

  if (myChart) myChart.destroy();
  myChart = new Chart(ctx, pieChart);
}
