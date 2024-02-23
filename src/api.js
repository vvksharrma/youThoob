import axios from "axios";

export const request = axios.create({
    baseURL: `${process.env.REACT_APP_YT_BASE_URL}`,
    params: {
        key: `${process.env.REACT_APP_YT_PARAM_KEY}`,
     },
  });