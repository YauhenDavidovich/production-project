import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/appConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onOpenLoginModal = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    const onCloseLoginModal = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logOut());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Production Project')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    className={cls.createBtn}
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Create article')}
                </AppLink>
                <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogOut}>
                    {t('Sign out')}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenLoginModal}>
                {t('Sign in')}
            </Button>
            {isAuthModalOpen && (<LoginModal onClose={onCloseLoginModal} isOpen={isAuthModalOpen} />)}
        </header>
    );
});
