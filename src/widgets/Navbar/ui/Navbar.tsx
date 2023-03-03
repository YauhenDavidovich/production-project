import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
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
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogOut}>
                    {t('Sign out')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenLoginModal}>
                {t('Sign in')}
            </Button>
            <LoginModal onClose={onCloseLoginModal} isOpen={isAuthModalOpen} />
        </div>
    );
};
