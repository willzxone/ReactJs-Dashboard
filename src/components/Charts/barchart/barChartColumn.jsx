/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { options } from "./barChartOptions";
const BarChart = (props) => {
  const [chartSeries, setChartSeries] = useState([
    {
      data: [34, 55, 41, 28, 22, 43, 22, 33, 26],
    },
    {
      data: [23, 23, 20, 28, 43, 27, 40, 35, 26],
    },
  ]);
  const [chartOptions, setChartOptions] = useState(options);

  useEffect(() => {
    if (props.data !== undefined && props.options !== undefined) {
      setChartOptions(props.options);
      setChartSeries(props.data.series);
    }
  }, [props.data, props.options]);

  return (
    <div id="chart">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={props.height != undefined ? props.height : 200}
        width={"100%"}
      />
    </div>
  );
};

export default BarChart;
