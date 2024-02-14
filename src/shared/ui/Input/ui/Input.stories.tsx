import { Meta, StoryObj } from '@storybook/react';
import { Input } from 'shared/ui/Input/ui/Input';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { Theme } from 'app/Providers/ThemeProvider';

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    } as any,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Type something',
        value: `Hi dude I'm glad u reading this`,
    },
};
export const Dark: Story = {
    args: {
        placeholder: 'Type something',
        value: `Hi dude I'm glad u reading this`,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
