import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const [loginValue, setLoginValue] = useState('');
    const [passValue, setPassValue] = useState('');

    const onChangeLogin = (value: string) => {
        setLoginValue(value);
    };

    const onChangePass = (value: string) => {
        setPassValue(value);
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                onChange={onChangeLogin}
                placeholder={t('Username')}
                autofocus
                value={loginValue}
            />
            <Input
                type="text"
                className={cls.input}
                onChange={onChangePass}
                placeholder={t('Password')}
                value={passValue}
            />
            <Button className={cls.loginBtn}>{t('Login')}</Button>
        </div>
    );
};
