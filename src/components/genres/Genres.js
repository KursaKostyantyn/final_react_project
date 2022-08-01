import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../redux/slices/genre.slice";
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
            {genres.map((genre => <Genre key={genre.id} name={genre.name}/>))}
        </div>
    )
}

export {
    Genres
}