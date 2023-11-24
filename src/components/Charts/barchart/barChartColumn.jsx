import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const [chartData] = useState({
    series: [
      {
        name: "PRODUCT A",
        data: [34, 55, 41, 28, 22, 43, 22, 33, 26],
      },
      {
        name: "PRODUCT B",
        data: [23, 23, 20, 28, 43, 27, 40, 35, 26],
      },
    ],
    options: {
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
      colors: ["#4318FF", "#6AD2FF"],

      plotOptions: {
        bar: {
          columnWidth: "20%",
          horizontal: false,
          borderRadius: 0,
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: false, // Set to false to hide labels on hover
      },
      xaxis: {
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
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={200}
      />
    </div>
  );
};

export default BarChart;
