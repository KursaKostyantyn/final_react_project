import {useSelector} from "react-redux";

import css from './MovieInfo.module.css'
import {Genre, PosterPreview, StarRating} from "../index";
import {ThemeContext} from "../../App";
import {DARK_THEME, LIGHT_THEME} from "../../constants";

const MovieInfo = () => {
    const {movies, currentMovieId, genresNames} = useSelector(state => state.movies);
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
        <ThemeContext.Consumer>
            {
                (value) => {

                    if (value.themes === true) {
                        return (
                            <div className={css.movieInfoWrap} style={LIGHT_THEME}>
                                <div className={css.movieInfoPoster}>
                                    <PosterPreview imgPath={poster_path} original_title={original_title} key={id}/>
                                </div>
                                <div className={css.movieInfo}>
                                    <div>adult: {adult.toString()}</div>
                                    <div>original_language: {original_language}</div>
                                    <div>original_title: {original_title}</div>
                                    <h6>
                                        <div className={css.movieInfoGenre}> Genres:
                                            {genresNames.map(genre => <Genre key={genre.id} name={genre.name}
                                                                             id={genre.id}
                                                                             someInfo={genre.id} badgeStatus={false}/>)}
                                        </div>
                                    </h6>
                                    <div>overview: {overview}</div>
                                    <div>popularity: {popularity}</div>
                                    <div>release_date: {release_date}</div>
                                    <div>title: {title}</div>
                                    <div>video: {video.toString()}</div>
                                    <div>vote_average: {vote_average}</div>
                                    <div>vote_count: {vote_count}</div>
                                    <div><StarRating vote_average={vote_average}/></div>
                                </div>
                            </div>
                        )
                    }

                    if (value.themes === false) {
                        return (
                            <div className={css.movieInfoWrap} style={DARK_THEME}>
                                <div className={css.movieInfoPoster}>
                                    <PosterPreview imgPath={poster_path} original_title={original_title} key={id}/>
                                </div>
                                <div className={css.movieInfo}>
                                    <div>adult: {adult.toString()}</div>
                                    <div>original_language: {original_language}</div>
                                    <div>original_title: {original_title}</div>
                                    <h6>
                                        <div className={css.movieInfoGenre}> Genres:
                                            {genresNames.map(genre => <Genre key={genre.id} name={genre.name}
                                                                             id={genre.id}
                                                                             someInfo={genre.id} badgeStatus={false}/>)}
                                        </div>
                                    </h6>
                                    <div>overview: {overview}</div>
                                    <div>popularity: {popularity}</div>
                                    <div>release_date: {release_date}</div>
                                    <div>title: {title}</div>
                                    <div>video: {video.toString()}</div>
                                    <div>vote_average: {vote_average}</div>
                                    <div>vote_count: {vote_count}</div>
                                    <div><StarRating vote_average={vote_average}/></div>
                                </div>
                            </div>
                        )
                    }
                    console.log(JSON.stringify(value.themes))


                }
            }
        </ThemeContext.Consumer>


    )
}

export {
    MovieInfo
}
