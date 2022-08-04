import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {movieActions} from "../../redux";
import css from './search.module.css'

const SearchForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = (data) => {
        dispatch(movieActions.setSearchName(data.searchName))
        navigate('/')
        reset()
    }

    return (
        <div className={css.search}>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' placeholder='search' {...register('searchName')}/>
                <button>search</button>
            </form>
        </div>


    )
}

export {
    SearchForm
}