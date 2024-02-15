import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    Button,
    ButtonTheme,
} from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from 'entities/User/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'entities/User/model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export enum actionsInput {
    USERNAME = 'setUsername',
    PASSWORD = 'setPassword',
}

export const LoginForm = memo(
    ({ className }: LoginFormProps) => {
        const { t } = useTranslation();
        const dispatch = useDispatch();
        const { username, password } =
            useSelector(getLoginState);

        const onChangeHandler = useCallback(
            (key: actionsInput) => (value: string) => {
                dispatch(loginActions[key](value));
            },
            [dispatch],
        );

        const onLoginClick = useCallback(() => {
            dispatch(
                loginByUsername({ username, password }),
            );
        }, [dispatch, password, username]);

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
                    onChange={onChangeHandler(
                        actionsInput.USERNAME,
                    )}
                    value={username}
                />
                <Input
                    type="text"
                    placeholder={t('Пароль')}
                    value={password}
                    onChange={onChangeHandler(
                        actionsInput.PASSWORD,
                    )}
                />
                <Button
                    className={cls.loginBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onLoginClick}
                >
                    {t('Войти')}
                </Button>
            </div>
        );
    },
);
