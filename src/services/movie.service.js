import {axiosService} from "./axios.service";

import {urls} from "../constants";

const movieService = {
    getAll: (page = 1) => axiosService(`${urls.movie}`, {params: {page}})
}

export {
    movieService
}