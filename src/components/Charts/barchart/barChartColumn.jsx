/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { series } from "./barChartSeries";
import { options } from "./barChartOptions";
const BarChart = (props) => {
  const [chartSeries, setChartSeries] = useState(series);
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
