/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { annotationPoint } from "./annotationPoint";
import { chatOptions } from "./chartOptions";
const LineChart = (props) => {
  const [series, setSeries] = useState([
    { data: [28, 29, 33, 36, 32, 32, 33, 36, 32, 32, 33, 15] },
    { data: [12, 11, 14, 18, 17, 13, 13, 12, 11, 14, 18, 17] },
  ]);

  const [options, setOptions] = useState(chatOptions);

  useEffect(() => {
    if (props.data !== undefined) {
      const { updatedPoint, max, min } = annotationPoint(props.data, options);
      setOptions({
        ...options,
        xaxis: {
          categories: props.data.categories,
        },
        yaxis: {
          min: min,
          max: max,
          show: false,
        },
        annotations: {
          points: [updatedPoint],
        },
      });
      setSeries(props.data.series);
    }
  }, [props.data]);

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={props.height}
        width={props.width}
      />
    </div>
  );
};

export default LineChart;
