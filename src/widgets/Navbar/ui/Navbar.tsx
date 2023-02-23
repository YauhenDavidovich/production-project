import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModalOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
                {t('Sign in')}
            </Button>
            <Modal onClose={onToggleModal} isOpen={isAuthModalOpen}>{t('JHJFDJDJBfjjfjd')}</Modal>
        </div>
    );
};
