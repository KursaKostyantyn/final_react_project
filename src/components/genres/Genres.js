import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genreActions} from "../../redux";
import {Genre} from "../genre";

const Genres = () => {
    const {genres} = useSelector(state => state.genres);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch])

    return (
        <div>
            Genres:
            <hr/>
            {genres.map((genre => <Genre key={genre.id} someInfo={genre.id} name={genre.name} id={genre.id} badgeStatus={true}/>))}
        </div>
    )
}

export {
    Genres
}