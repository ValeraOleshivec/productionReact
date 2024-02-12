import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
// import { BugButton } from 'app/Providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {/* <BugButton /> */}
            {t('Главная страница')}
            <Counter />
        </div>
    );
};

export default MainPage;
