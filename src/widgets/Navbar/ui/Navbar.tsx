import { classNames } from 'shared/lib/classNames/classNames';
import {
    AppLink,
    AppLinkTheme,
} from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import {
    Button,
    ButtonTheme,
} from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] =
        useState<boolean>(false);
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    return (
        <div
            className={classNames(cls.navbar, {}, [
                className,
            ])}
        >
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >
                {t(`Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Adipisci commodi,
                dignissimos fuga hic laudantium porro quos
                totam. Amet blanditiis dolorum error facere
                illo maxime odio quod reprehenderit! At,
                natus tempora.`)}
            </Modal>
        </div>
    );
};
