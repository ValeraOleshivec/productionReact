import React, {
    ChangeEvent,
    Dispatch,
    InputHTMLAttributes,
    memo,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;
interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string, key?: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        value,
        onChange,
        className,
        type = 'text',
        placeholder,
        ...inputProps
    } = props;
    const [currentPostion, setCurrentPostion] =
        useState<number>();
    const onChangeHandler = (
        e: ChangeEvent<HTMLInputElement>,
    ) => {
        onChange?.(e.target.value);
        setCurrentPostion(e.target.value.length);
    };
    const onSelect = (e: any) => {
        setCurrentPostion(
            (prev) => e?.target?.selectionStart || prev,
        );
    };

    return (
        <div
            className={classNames(cls.InputWrapper, {}, [
                className,
            ])}
        >
            <div className={cls.placeholder}>
                {`${placeholder}>`}
            </div>
            <div className={cls.caretWrapper}>
                <input
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onSelect={onSelect}
                    {...inputProps}
                />
                <span
                    className={cls.caret}
                    style={{
                        left: `${currentPostion * 9}px`,
                    }}
                />
            </div>
        </div>
    );
});
