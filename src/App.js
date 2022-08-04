import {Navigate, Route, Routes} from "react-router-dom";
import {createContext} from "react";

import './App.css';
import {MainLayout} from "./layouts";
import {MoviePage, MoviesPage} from "./pages";

export const cont = {
    themes: true,
    toggleTheme: (data) => {
        cont.themes = data.isChecked
    }
}

export let ThemeContext = createContext({
    themes: cont.themes, toggleTheme: cont.toggleTheme
})

function App() {

    return (
        <ThemeContext.Provider value={cont}>
            <div className="App">
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}>
                        <Route index element={<Navigate to={'movies'}/>}/>
                        <Route path={'movies'} element={<MoviesPage/>}/>
                        <Route path={':title'} element={<MoviePage/>}/>
                    </Route>
                </Routes>
            </div>
        </ThemeContext.Provider>
    )
}

export {
    App,
};
