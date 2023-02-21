import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
    }}
    >
        <ThemeSwitcher {...args} />
    </div>
);

export const ThemeSwitcherNormal = Template.bind({});
ThemeSwitcherNormal.args = {};

export const ThemeSwitcherDark = Template.bind({});
ThemeSwitcherDark.args = {};

ThemeSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];
