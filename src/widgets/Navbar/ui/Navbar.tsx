import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import React from "react";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={"/"}
                         className={cls.mainLink}
                         theme={AppLinkTheme.SECONDARY}>
                    HomePage
                </AppLink>
                <AppLink
                    to={"/about"}
                    theme={AppLinkTheme.SECONDARY}>
                    AboutPage
                </AppLink>
            </div>

        </div>
    );
};



