import {Link} from "react-router-dom";
import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProviders";
import {AppRouter} from "app/providers/router";

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <div>
                <Link to={"/"}>HomePage</Link>
                <Link to={"/about"}>AboutPage</Link>
                <button onClick={toggleTheme}>Toggle theme</button>
            </div>
            <AppRouter/>

        </div>
    )
}

export default App;
