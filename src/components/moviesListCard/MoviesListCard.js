import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";

import css from './MoviesListCard.module.css'
import {PosterPreview} from "../posterPreview";

const MoviesListCard = ({movie}) => {
    const {
        id,
        adult,
        backdrop_path,
        original_language,
        original_title,
        overview,
        popularity,
        release_date,
        title,
        video,
        vote_average,
        vote_count
    } = movie

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const chosenMovie = () => {
        dispatch(movieActions.setCurrentMovieId(id))
        navigate(`/${title}`)

    }

    return (
        <div className={css.moviesListCardWrap} onClick={chosenMovie}>
            <PosterPreview imgPath={backdrop_path} original_title={original_title} key={id}/>
            <div>
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
    MoviesListCard
}