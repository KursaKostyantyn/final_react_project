import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {MoviesListCard} from "../moviesListCard";
import css from './MoviesList.module.css'
import {movieActions} from "../../redux";

const MoviesList = () => {

    const {movies, totalPages} = useSelector(state => state.movies)
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}));
    }, [query, dispatch])

    let prevStatus = false

    if (+query.get('page') === 1) {
         prevStatus = true

    }
    let nextStatus = null;

    if (+query.get('page') === 500){
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
        </div>

    )
}

export {
    MoviesList
}