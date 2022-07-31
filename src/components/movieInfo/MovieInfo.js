import {useSelector} from "react-redux";

import css from './MovieInfo.module.css'
import {PosterPreview} from "../posterPreview";

const MovieInfo = () => {
    const {movies, currentMovieId} = useSelector(state => state.movies);

    const movie = movies.find(movie => movie.id === currentMovieId)

    const {
        id,
        adult,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        video,
        vote_average,
        vote_count
    } = movie


    return (
        <div className={css.movieInfoWrap}>
            <div className={css.movieInfoPoster}>
                <PosterPreview imgPath={poster_path} original_title={original_title} key={id}/>
            </div>
            <div className={css.movieInfo}>
                <div>adult: {adult.toString()}</div>
                <div>original_language: {original_language}</div>
                <div>original_title: {original_title}</div>
                <div>overview: {overview}</div>
                <div>popularity: {popularity}</div>
                <div>release_date: {release_date}</div>
                <div>title: {title}</div>
                <div>video: {video.toString()}</div>
                <div>vote_average: {vote_average}</div>
                <div>vote_count: {vote_count}</div>
            </div>
        </div>
    )
}

export {
    MovieInfo
}