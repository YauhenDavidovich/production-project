import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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

export const ButtonClearInverted = Template.bind({});
ButtonClearInverted.args = {
    children: 'ClearInverted Button',
    theme: ButtonTheme.CLEAR_INVERTED,
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

export const ButtonSizeM = Template.bind({});
ButtonSizeM.args = {
    children: 'OutlineLight Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};

export const ButtonSizeL = Template.bind({});
ButtonSizeL.args = {
    children: 'OutlineLight Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const ButtonSizeXL = Template.bind({});
ButtonSizeXL.args = {
    children: 'OutlineLight Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const ButtonBackgroundTheme = Template.bind({});
ButtonBackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const ButtonBackgroundInvertedTheme = Template.bind({});
ButtonBackgroundInvertedTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const ButtonSquare = Template.bind({});
ButtonSquare.args = {
    children: 'B',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};

export const ButtonSquareSizeM = Template.bind({});
ButtonSquareSizeM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
};

export const ButtonSquareSizeL = Template.bind({});
ButtonSquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const ButtonSquareSizeXL = Template.bind({});
ButtonSquareSizeXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
