/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { options } from "./pieChartOptions";

const PieChart = (props) => {
  const [chartSeries, setChartSeries] = useState([20, 55]);
  const [chartOptions] = useState(options);
  useEffect(() => {
    if (props.data !== undefined) {
      setChartSeries(props.data.data);
    }
  }, [props.data]);
  return (
    <div id="chart">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="pie"
        width={380}
        height={350}
      />
    </div>
  );
};

export default PieChart;
