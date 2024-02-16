import { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { Theme } from 'app/Providers/ThemeProvider';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    } as any,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};
export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        theme: TextTheme.ERROR,
    },
};
export const ErrorDark: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const ErrorWithTitle: Story = {
    args: {
        title: 'Title',
        theme: TextTheme.ERROR,
    },
};
export const ErrorWithText: Story = {
    args: {
        text: 'Text',
        theme: TextTheme.ERROR,
    },
};
export const withTitle: Story = {
    args: {
        title: 'Title',
    },
};
export const withText: Story = {
    args: {
        text: 'Text',
    },
};
export const withTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const withTextDark: Story = {
    args: {
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
