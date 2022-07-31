import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    errors: null,
    currentMovieId: null
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setCurrentMovieId: (state, action) => {
            state.currentMovieId = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null;
                state.movies = action.payload.results;

            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').slice(-1);
                if(type === 'rejected'){
                    state.errors = action.payload;
                } else {
                    state.errors = null;
                }
            })
    }
})

const{reducer: movieReducer, actions: {setCurrentMovieId}}=movieSlice;

const movieActions={
    getAll,
    setCurrentMovieId
}

export {
    movieReducer,
    movieActions
}