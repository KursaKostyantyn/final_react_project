import axios from "axios";

import {baseURL, accessToken} from "../constants";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use((config) => {
    const access = accessToken;

    if (access) {
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})

export {
    axiosService
}