import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { Meta, StoryObj } from '@storybook/react';

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

export const Primary: Story = {};