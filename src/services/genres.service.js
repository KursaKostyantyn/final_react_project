import {axiosService} from "./axios.service";

import {urls} from "../constants";

const genresService = {
    getAll: () => axiosService(`${urls.genres}`)
}

export {
    genresService
}