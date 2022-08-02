import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";

const Menu = () => {
    const dispatch = useDispatch();

    const setSearchNameNull = () => {
        dispatch(movieActions.setSearchName(null))
        dispatch(movieActions.setGenreId(null))
    }

    return (
        <div onClick={setSearchNameNull}>
            <Link to={'/movies'}>Movies</Link>
            <hr/>
        </div>

    )
}

export {
    Menu
}