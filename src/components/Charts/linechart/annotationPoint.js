export const annotationPoint = (data, options) => {
  const allData = data.series.flatMap((item) => item.data);

  // Calculate the maximum and minimum values
  const max = Math.max(...allData);
  const min = Math.min(...allData);

  const randomIndex = Math.floor(Math.random() * data.series[0].data.length);

  const Y = data.series[0].data[randomIndex];
  const X = data.categories[randomIndex];

  const point = options.annotations.points[0];

  const updatedPoint = {
    ...point,
    x: X,
    y: Y,
    label: {
      ...point.label,
      text: `${Y}$`,
    },
  };
  return { updatedPoint, max, min };
};
