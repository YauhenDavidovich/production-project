import {RouteProps} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {HomePage} from "pages/HomePage";

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about"
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <HomePage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
}
