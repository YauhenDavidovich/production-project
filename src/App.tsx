import {Link, Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import AboutPageAsync from "./pages/AboutPage/AbotPage.async";
import HomePageAsync from "./pages/HomePage/AbotPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

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
                    <Route element={<HomePageAsync/>} path={'/'}></Route>
                    <Route element={<AboutPageAsync/>} path={'/about'}></Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;
