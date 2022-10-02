import {Link, Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProviders";
import {AboutPage} from "pages/AboutPage";
import {HomePage} from "pages/HomePage";

const App = () => {

   const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <div>
                <Link to={"/"}>HomePage</Link>
                <Link to={"/about"}>AboutPage</Link>
                <button onClick={toggleTheme}>Toggle theme</button>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route element={<HomePage/>} path={'/'}></Route>
                    <Route element={<AboutPage/>} path={'/about'}></Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;
