import axios from "axios";

const cv_api = axios.create({
    baseURL:"http://localhost:8080",
})

export default cv_api

