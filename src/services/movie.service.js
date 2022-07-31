import {axiosService} from "./axios.service";

import {urls} from "../constants";

const movieService = {
    getAll: () => axiosService(`${urls.movie}`)
}

export {
    movieService
}