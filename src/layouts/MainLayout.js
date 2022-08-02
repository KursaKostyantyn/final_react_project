import {Outlet} from "react-router-dom";

import {Genres, Header, Menu, SearchForm, UserInfo} from "../components";
import css from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div>
            <div className={css.headerWrap}>
                <div className={css.header}><Header/></div>
                <div className={css.userInfo}><UserInfo/></div>
            </div>
            <div className={css.container}>
                <div className={css.menu}>
                    <div><Menu/></div>
                    <div><Genres/></div>
                </div>
                <div className={css.wrap}>
                    <div className={css.genres}>
                        <SearchForm/>
                    </div>
                    <div className={css.mostPopular}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    MainLayout
}