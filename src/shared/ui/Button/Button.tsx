import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: string;
}
export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}
export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { className, children, theme, ...otherProps } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
