import axios from "axios";

axios.defaults.baseURL = "http://localhost:3002";
// axios.defaults.headers.common['Authorization'] = "AUTH_TOKEN";

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

const http = {
  post: axios.post,
  put: axios.put,
  get: axios.get,
  delete: axios.delete,
};

export default http;
