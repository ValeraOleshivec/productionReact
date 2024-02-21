import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { ModalProps } from 'shared/ui/Modal/ui/Modal';
import { Loader } from 'shared/ui/Loader';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface LoginModalProps extends Omit<ModalProps, 'children'> {
    className?: string;
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, ...modalProps } = props;
    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            lazy
            {...modalProps}
        >
            <Suspense fallback={<Loader />}>
                <LoginForm />
            </Suspense>
        </Modal>
    );
};
