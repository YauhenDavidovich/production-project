import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AdminPanel from './AdminPanel';

export default {
    title: 'pages/AdminPanel',
    component: AdminPanel,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
} as ComponentMeta<typeof AdminPanel>;

const Template: ComponentStory<typeof AdminPanel> = () => (
    <AdminPanel />
);

export const AdminPanelLight = Template.bind({});
AdminPanelLight.args = {};

export const AdminPanelDark = Template.bind({});
AdminPanelDark.args = {};
AdminPanelDark.decorators = [ThemeDecorator(Theme.DARK)];
