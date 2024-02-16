import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { Theme } from 'app/Providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import i18n from 'i18next';

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    } as any,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [StoreDecorator({ user: { authData: {} } })],
};
export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({ user: { authData: {} } }),
    ],
    parameters: i18n,
};
