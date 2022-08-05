import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import css from './MoviesListCard.module.css'
import {PosterPreview} from "../posterPreview";
import {Genre} from "../genre";

const MoviesListCard = ({movie}) => {
    const {genres} = useSelector(state => state.genres)

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
        vote_count,
        genre_ids
    } = movie

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const chosenMovie = () => {
        dispatch(movieActions.setCurrentMovieId(id))
        dispatch(movieActions.setGenresNames(genresNames))
        navigate(`/${title}`)
    }

    const genresNames = []

    for (let i = 0; i < genre_ids.length; i++) {
        const genre = genres.find(genre => genre.id === genre_ids[i])
        genresNames.push(genre)
    }

    return (
        <div className={css.moviesListCardWrap} onClick={chosenMovie}>
            <PosterPreview imgPath={backdrop_path} original_title={original_title} key={id}/>
            <div>
                <div>adult: {adult.toString()}</div>
                <div>original_language: {original_language}</div>
                <div>original_title: {original_title}</div>
                {genres !== undefined &&
                    <div className={css.movieListCardGenres}>Genres: {genresNames.map(genre => <Genre key={genre.id}
                                                                                                      name={genre.name}
                                                                                                      id={genre.id}
                                                                                                      someInfo={genre.id}
                                                                                                      badgeStatus={false}/>)}
                    </div>}
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