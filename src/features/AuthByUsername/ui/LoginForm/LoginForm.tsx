import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { loginByUsername } from 'entities/User/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReduxStoreWithReducerManager } from 'app/Providers/StoreProvider';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import cls from './LoginForm.module.scss';
import {
    loginActions,
    loginReducer,
} from '../../model/slice/loginSlice';

export interface LoginFormProps {
    className?: string;
}

export enum actionsInput {
    USERNAME = 'setUsername',
    PASSWORD = 'setPassword',
}
const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginLoading);

    const onChangeHandler = useCallback(
        (key: actionsInput) => (value: string) => {
            dispatch(loginActions[key](value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <div
                className={classNames(cls.LoginForm, {}, [className])}
            >
                <Text title={t('Форма авторизации')} />
                {error && (
                    <Text text={error} theme={TextTheme.ERROR} />
                )}
                <Input
                    type="text"
                    placeholder={t('Имя пользователя')}
                    autoFocus
                    onChange={onChangeHandler(actionsInput.USERNAME)}
                    value={username}
                />
                <Input
                    type="text"
                    placeholder={t('Пароль')}
                    value={password}
                    onChange={onChangeHandler(actionsInput.PASSWORD)}
                />
                <Button
                    className={cls.loginBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});
export default LoginForm;
