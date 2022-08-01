import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../../services";

const initialState = {
    genres: [],
    errors: null
}

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await genresService.getAll();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null;
                state.genres = action.payload.genres
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').slice(-1);
                if (type === 'rejected') {
                    state.errors = action.payload;
                } else {
                    state.errors = null;
                }
            })
    }
})

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    getAll
}

export {
    genreReducer,
    genreActions
}