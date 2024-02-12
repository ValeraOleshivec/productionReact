import { Meta, StoryObj } from '@storybook/react';
import { Modal } from 'shared/ui/Modal';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { Theme } from 'app/Providers/ThemeProvider';

const meta = {
    title: 'ui/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    } as any,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci commodi, dignissimos fuga hic laudantium porro quos totam. Amet blanditiis dolorum error facere illo maxime odio quod reprehenderit! At, natus tempora.',
        isOpen: true,
    },
};
export const Dark: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci commodi, dignissimos fuga hic laudantium porro quos totam. Amet blanditiis dolorum error facere illo maxime odio quod reprehenderit! At, natus tempora.',
        isOpen: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
