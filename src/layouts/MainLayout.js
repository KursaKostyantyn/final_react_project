import {Outlet} from "react-router-dom";

import {Header, UserInfo} from "../components";
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
                    Menu
                </div>
                <div className={css.wrap}>
                    <div className={css.genres}>
                        all genres
                    </div>
                    <div className={css.mostPopular}>
                        most popular
                        <Outlet/>
                    </div>
                    <div className={css.movie}>
                        one movie
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    MainLayout
}