const baseURL = 'https://api.themoviedb.org/3';

const urlForPoster = 'https://image.tmdb.org/t/p/w500'

const urls = {
    movie: '/discover/movie',
    genres:'/genre/movie/list',
    searchByName: '/search/movie?query='
}

export {
    baseURL,
    urls,
    urlForPoster
}