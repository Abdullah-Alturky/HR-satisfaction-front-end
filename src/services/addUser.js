import axios from "../API/axios";

const addUser = (dataFetch, objectData) => {
  dataFetch({
    axiosInstance: axios,
    method: "POST",
    url: "/api/users",
    requestConfig: {
      data: objectData,
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  return true;
};

const userRecommend = (dataFetch, objectData) => {
  dataFetch({
    axiosInstance: axios,
    method: "POST",
    url: "/api/users/recommend",
    requestConfig: {
      data: objectData,
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  return true;
};

export { addUser, userRecommend };
