import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    } as any,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};
export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};
export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};
export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};
export const SquareSizeS: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.S,
    },
};
export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};
export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};
export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
export const OutlinedSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};
export const OutlinedSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};
export const OutlinedSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M,
    },
};
export const OutlinedSizeS: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.S,
    },
};
export const Disabled: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
};
