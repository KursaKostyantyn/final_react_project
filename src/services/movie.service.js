import {axiosService} from "./axios.service";

import {urls} from "../constants";

const movieService = {
    getAll: (page = 1) => axiosService(`${urls.movie}`, {params: {page}}),
    searchByName: (searchName, page = 1) => axiosService(`${urls.searchByName}+${searchName}`, {params: {page}}),
    getMoviesByGenre: (genreId,page=1)=> axiosService(`${urls.movie}?with_genres=${genreId}`,{params:{page}})
}

export {
    movieService
}