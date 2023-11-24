export const chatOptions = {
  chart: {
    height: 350,
    type: "line",
    toolbar: {
      show: false,
    },
    paddingLeft: 10,
  },
  colors: ["#4318FF", "#6AD2FF"],
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    labels: {
      style: {
        colors: "#a3aed0",
        fontFamily: "DM Sans-Medium, Helvetica",
        fontSize: "13px",
        fontWeight: 500,
      },
    },
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    title: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    max: 100,
    show: false,
  },
  legend: {
    show: false,
    onItemHover: {
      highlightDataSeries: false,
    },
  },
  tooltip: {
    enabled: false, // Set this to false to hide the tooltip on hover
  },
  annotations: {
    points: [
      {
        x: "Aug",
        y: 36,
        seriesIndex: 0,
        marker: {
          size: 6,
          colors: ["transparent"],
          strokeColor: "#4318FF",
          strokeWidth: 2,
          hover: {
            size: 10,
          },
        },
        label: {
          offsetY: -5,
          text: "$108",
          borderRadius: 6,
          style: {
            color: "#fff",
            background: "#4318FF",
            textAlign: "center",
            lineHeight: "34px",
            backgroundSize: "cover",
            height: "50px",
            width: "80px",
            display: "block",
            padding: {
              left: 10,
              right: 10,
              top: 5,
              bottom: 5,
            },
          },
        },
      },
    ],
  },
};
