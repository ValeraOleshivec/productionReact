import { I18nextProvider } from 'react-i18next';
import { Suspense } from 'react';
import i18n from 'shared/config/i18n/i18n';
import i18next from '../../../../../config/.storybook/i18next';

export const TranslationDecorator = (StoryComponet: any) => (
    <I18nextProvider i18n={i18next}>
        <Suspense fallback="">
            <StoryComponet />
        </Suspense>
    </I18nextProvider>
);
