import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import LoginForm from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    } as any,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({
            loginForm: { username: '123', password: '123' },
        }),
    ],
};
export const WithError: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                username: '123',
                password: '123',
                error: 'ОШИБКА',
            },
        }),
    ],
};
export const Loading: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                username: '123',
                password: '123',
                isLoading: true,
            },
        }),
    ],
};
