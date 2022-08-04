import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {ThemeContext} from "../../App";

let isDark = false;

const ThemeSwitcher = () => {
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleChange = () => {
        setIsChecked(!isChecked)
        navigate('/')
    }

    return (
        <div>
            <ThemeContext.Consumer>
                {({toggleTheme}) => {
                    return (
                        <label>
                            <input
                                type={"checkbox"}
                                role={"switch"}
                                checked={isChecked}
                                onChange={() => {
                                    toggleTheme({isChecked})
                                    handleChange()
                                }}
                            />
                            Dark mode
                        </label>
                    )
                }

                }
            </ThemeContext.Consumer>
        </div>
    )
}

export
{
    ThemeSwitcher,
    isDark
}
