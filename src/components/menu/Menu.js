import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {movieActions} from "../../redux";
import css from './menu.module.css'

const Menu = () => {
    const dispatch = useDispatch();

    const setSearchNameNull = () => {
        dispatch(movieActions.setSearchName(null))
        dispatch(movieActions.setGenreId(null))
    }

    return (
        <div onClick={setSearchNameNull} className={css.movies}>
            <Link to={'/movies'}>Movies</Link>
        </div>

    )
}

export {
    Menu
}