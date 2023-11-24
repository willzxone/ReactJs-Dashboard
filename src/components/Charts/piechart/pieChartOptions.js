import "./piechart.css";
export const options = {
  chart: {
    width: 380,
    type: "pie",
  },
  labels: ["System", "Your Files"],
  colors: ["#4318FF", "#6AD2FF"],

  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: "bottom",
    formatter: function (val, opts) {
      return `
      <div>
        <div class="legend-label">${val}</div>
        <div class=" legend-percentage">${
          opts.w.config.series[opts.seriesIndex]
        }%</div>
      </div>`;
    },
    markers: {
      width: 8,
      height: 8,
    },
  },
};
