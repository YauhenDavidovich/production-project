import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
    }}
    >
        <Modal {...args} />
    </div>
);

export const PrimaryModal = Template.bind({});
PrimaryModal.args = {
    children: 'LOrer sddfsdf fdfdfdffdfd df dfggg  gfgfgfgd dsdf',
    isOpen: true,
};

export const PrimaryModalDarkTheme = Template.bind({});
PrimaryModalDarkTheme.args = {
    children: 'LOrer sddfsdf fdfdfdffdfd df dfggg  gfgfgfgd dsdf',
    isOpen: true,
};

PrimaryModalDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
