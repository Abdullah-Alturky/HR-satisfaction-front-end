import axios from "../API/axios";
const getUsers = (fetchData, objectData) => {
  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: "/api/users",
    requestConfig: {
      params: objectData,
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};
const getUser = (fetchData, id) => {
  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: `/api/users/${id}`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export { getUsers, getUser };
