import axios from "axios";

const ENV = import.meta.env;

const cv_api = axios.create({
    baseURL:ENV.VITE_CV_API_URL,
})

export default cv_api

