import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    errors: null,
    currentMovieId: null,
    totalPages: null,
    searchName: null,
    genreId: null,
    genresNames: null
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const searchByName = createAsyncThunk(
    'movieSlice/searchByName',
    async ({searchName, page}, {rejectWithValue},) => {
        try {
            const {data} = await movieService.searchByName(searchName, page)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getMoviesByGenre = createAsyncThunk(
    'movieSlice/getMoviesByGenre',
    async ({genreId, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesByGenre(genreId, page);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setCurrentMovieId: (state, action) => {
            state.currentMovieId = action.payload;
        },
        setSearchName: (state, action) => {
            state.searchName = action.payload
            state.genreId = null
        },
        setGenreId: (state, action) => {

            state.genreId = action.payload;
            state.searchName = null;

        },
        setGenresNames:(state, action) => {
            state.genresNames = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null;
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages;
            })
            .addCase(searchByName.fulfilled, (state, action) => {
                state.errors = null;
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages;
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                state.errors = null;
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages;
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

const {reducer: movieReducer, actions: {setCurrentMovieId, setSearchName, setGenreId, setGenresNames}} = movieSlice;

const movieActions = {
    getAll,
    setCurrentMovieId,
    searchByName,
    setSearchName,
    getMoviesByGenre,
    setGenreId,
    setGenresNames
}

export {
    movieReducer,
    movieActions
}