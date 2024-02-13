import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({
    className,
}: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div
            className={classNames(cls.LoginForm, {}, [
                className,
            ])}
        >
            <Input
                type="text"
                placeholder={t('Имя пользователя')}
                autoFocus
            />
            <Input type="text" placeholder={t('Пароль')} />
            <Button>{t('Войти')}</Button>
        </div>
    );
};
