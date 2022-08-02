import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {MoviesListCard} from "../moviesListCard";
import css from './MoviesList.module.css'
import {movieActions} from "../../redux";

const MoviesList = () => {

    const {movies, totalPages, searchName, genreId} = useSelector(state => state.movies)
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        if (!searchName && !genreId) {

            dispatch(movieActions.getAll({page: query.get('page')}));
        }
        if (searchName) {
            dispatch(movieActions.searchByName({
                searchName: searchName,
                page: query.get('page')
            }))
        }
        if (genreId) {
            dispatch(movieActions.getMoviesByGenre({
                genreId: genreId,
                page: query.get('page')
            }))
        }
    }, [query, dispatch, searchName, genreId])

    let prevStatus = false

    if (+query.get('page') === 1) {
        prevStatus = true

    }
    let nextStatus = null;

    if (+query.get('page') === totalPages) {
        nextStatus = true;
    }

    const previous = () => {
        const page = +query.get('page') - 1;
        setQuery({page: `${page}`})
    }

    const next = () => {
        const page = +query.get('page') + 1;
        setQuery({page: `${page}`});
    }

    return (

        <div>
            <button className={css.btn} disabled={prevStatus} onClick={previous}>previous page</button>
            page {query.get('page')} of {totalPages}
            <button className={css.btn} disabled={nextStatus} onClick={next}>next page</button>

            <div className={css.movieList}>
                {movies.map((movie, index) => <MoviesListCard key={index} movie={movie}/>)}
            </div>

            <button className={css.btn} disabled={prevStatus} onClick={previous}>previous page</button>
            page {query.get('page')} of {totalPages}
            <button className={css.btn} disabled={nextStatus} onClick={next}>next page</button>

        </div>

    )
}

export {
    MoviesList
}