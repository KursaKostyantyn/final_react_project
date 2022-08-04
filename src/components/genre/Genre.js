import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {GenreBadge} from "../index";
import {movieActions} from "../../redux";
import css from './genre.module.css'

const Genre = ({name, id, someInfo, badgeStatus}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setGenreId = () => {
        dispatch(movieActions.setGenreId(id))
        navigate('/')
    }

    return (
        <div className={css.genre}>
            <span onClick={setGenreId}>{name}</span> {badgeStatus && <GenreBadge someInfo={someInfo}/>}
            {badgeStatus && <hr/>}
        </div>
    )
}

export {
    Genre
}