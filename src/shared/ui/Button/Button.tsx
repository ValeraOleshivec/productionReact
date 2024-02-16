import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}
export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}
export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: string;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}
export const Button: FC<ButtonProps> = (
    props: ButtonProps,
) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;
    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [
                cls[theme],
                cls[size],
                className,
            ])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
