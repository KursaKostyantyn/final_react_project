import {Link} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div>
            <Link className={css.link} to={'/'}>mySite</Link>
        </div>
    )
}

export {Header}