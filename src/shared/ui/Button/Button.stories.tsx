import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {Button, ButtonTheme} from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
    }}
    >
        <Button {...args} />
    </div>
);

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    children: 'PrimaryLight Button',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'PrimaryDark Button',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearLight = Template.bind({});
ClearLight.args = {
    children: 'ClearLight Button',
    theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'ClearDark Button',
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLight = Template.bind({});
OutlineLight.args = {
    children: 'OutlineLight Button',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'OutlineDark Button',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
