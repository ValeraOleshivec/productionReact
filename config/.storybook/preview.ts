import type { Preview } from '@storybook/react';
import {
    StyleDecorator,
    ThemeDecorator,
} from '../../src/shared/config/storybook/decorators';
import { Theme } from '../../src/app/Providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/decorators/TranslationDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        TranslationDecorator,
    ],
    globals: {
        locale: 'en',
        locales: {
            en: 'English',
            ru: 'Russian',
        },
    },
};

export default preview;
