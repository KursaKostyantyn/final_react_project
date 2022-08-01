import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices";
import {genreReducer} from "./slices/genre.slice";

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}