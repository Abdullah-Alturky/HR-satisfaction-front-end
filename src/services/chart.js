import axios from "../API/axios";

// chart 1
const getUserSalariesStatistics = (dataFetch) => {
  dataFetch({
    axiosInstance: axios,
    method: "get",
    url: "/api/users/salaries-statistics",
  });
  return true;
};

// chart 2
const getTimeSpendStatistics = (dataFetch) => {
  dataFetch({
    axiosInstance: axios,
    method: "get",
    url: "/api/users/time-spend-statistics",
  });
  return true;
};


// stats
const getUserStatistics = (dataFetch) => {
  dataFetch({
    axiosInstance: axios,
    method: "get",
    url: "/api/users/statistics",
  });
  return true;
};


export {getUserSalariesStatistics, getUserStatistics, getTimeSpendStatistics}