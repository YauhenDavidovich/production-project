import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
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

export const ButtonPrimaryLight = Template.bind({});
ButtonPrimaryLight.args = {
    children: 'PrimaryLight Button',
};

export const ButtonPrimaryDark = Template.bind({});
ButtonPrimaryDark.args = {
    children: 'PrimaryDark Button',
};
ButtonPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ButtonClearLight = Template.bind({});
ButtonClearLight.args = {
    children: 'ClearLight Button',
    theme: ButtonTheme.CLEAR,
};

export const ButtonClearDark = Template.bind({});
ButtonClearDark.args = {
    children: 'ClearDark Button',
    theme: ButtonTheme.CLEAR,
};
ButtonClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ButtonOutlineLight = Template.bind({});
ButtonOutlineLight.args = {
    children: 'OutlineLight Button',
    theme: ButtonTheme.OUTLINE,
};

export const ButtonOutlineDark = Template.bind({});
ButtonOutlineDark.args = {
    children: 'OutlineDark Button',
    theme: ButtonTheme.OUTLINE,
};
ButtonOutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
