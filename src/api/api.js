import axios from "axios";
// import {toastError, toastSuccess} from '../styled/toastStyle'
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const getAllProducts = async () => {
  let response = [];
  await axios.get(`https://dummyjson.com/products`)
    .then((res) => {
      response = res?.data;
    //   console.log("response?.auth_token", response?.auth_token);
     
    })
    .catch((error) => {
      console.error(error);
    });
  return response;
};