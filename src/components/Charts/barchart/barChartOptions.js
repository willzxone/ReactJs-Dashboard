export const options = {
  chart: {
    type: "bar",
    height: 200,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ["#4318FF", "#6AD2FF", "#FFFFFF"],

  plotOptions: {
    bar: {
      columnWidth: "20%",
      horizontal: false,
      borderRadius: 6,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  tooltip: {
    enabled: false, // Set to false to hide labels on hover
  },
  xaxis: {
    axisBorder: {
      show: false, // Set to false to hide the line above x-axis categories
    },
    axisTicks: {
      show: false, // Set to false to hide the ticks along the x-axis
    },
    categories: [17, 18, 19, 20, 21, 22, 23, 24, 25],
    labels: {
      style: {
        colors: "#a3aed0",
        fontFamily: "DM Sans-Medium, Helvetica",
        fontSize: "13px",
        fontWeight: 500,
      },
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
    onItemHover: {
      highlightDataSeries: false,
    },
  },
  fill: {
    opacity: 1,
  },
};
