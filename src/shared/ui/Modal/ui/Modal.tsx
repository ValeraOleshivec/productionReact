import React, {
    Dispatch,
    ReactNode,
    SetStateAction,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/ui/Portal';
import { useTheme } from 'app/Providers/ThemeProvider';
import cls from './Modal.module.scss';

export interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}
const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose } = props;
    const [isClosing, setIsClosing] =
        useState<boolean>(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };
    const { theme } = useTheme();
    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener(
                'keydown',
                onKeyDown,
            );
            clearTimeout(timeRef.current);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                ])}
            >
                <div
                    className={cls.overlay}
                    onClick={closeHandler}
                >
                    <div
                        className={classNames(cls.content)}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
