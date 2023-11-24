export const revenueData = {
  monthly: {
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
    series: [
      { data: [30, 40, 45, 50, 55, 60, 70, 75, 80, 85, 90, 95] },
      { data: [15, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75] },
    ],
  },
  weekly: {
    categories: ["W-1", "W-2", "W-3", "W-4"],
    series: [{ data: [10, 5, 15, 18] }, { data: [5, 15, 13, 20] }],
  },
  daily: {
    categories: ["D-1", "D-2", "D-3", "D-4", "D-5"],
    series: [{ data: [5, 10, 15, 20, 25] }, { data: [2, 7, 12, 17, 22] }],
  },
};
