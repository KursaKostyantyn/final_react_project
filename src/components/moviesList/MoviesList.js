import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";

import {MoviesListCard} from "../moviesListCard";
import css from './MoviesList.module.css'


const MoviesList = () => {

    const {movies} = useSelector(state => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll());
    }, [dispatch])

    return (
        <div className={css.movieList}>
            {movies.map((movie, index) => <MoviesListCard key={index} movie={movie}/>)}
        </div>
    )
}

export {
    MoviesList
}