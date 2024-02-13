import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/ui/Input';
import { useState } from 'react';
// import { BugButton } from 'app/Providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState<string>();

    return (
        <div>
            <Input
                placeholder="Введите текс"
                onChange={setValue}
                value={value}
            />
            {/* <BugButton /> */}
            {t('Главная страница')}
            <Counter />
        </div>
    );
};

export default MainPage;
