import React, { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { Theme } from "app/Providers/ThemeProvider";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: string;
}
export enum ThemeButton {
  CLEAR = "clear",
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
