import { Suspense, useEffect, useState } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from 'app/Providers/ThemeProvider';
import { AppRouter } from 'app/Providers/router';
import { Modal } from 'shared/ui/Modal';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

function App() {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState<boolean>();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.initAuthData);
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
