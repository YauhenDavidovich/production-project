import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
    }}
    >
        <Text {...args} />
    </div>
);

export const TextPrimary = Template.bind({});
TextPrimary.args = {
    title: 'Text',
    text: 'text',
};

export const TextPrimaryError = Template.bind({});
TextPrimaryError.args = {
    title: 'Text',
    text: 'text',
    theme: TextTheme.ERROR,
};

export const TextOnlyTitle = Template.bind({});
TextOnlyTitle.args = {
    title: 'Text',
};

export const TextOnlyDescription = Template.bind({});
TextOnlyDescription.args = {
    text: 'text',
};

export const TextPrimaryDark = Template.bind({});
TextPrimaryDark.args = {
    title: 'Text',
    text: 'text',
};

TextPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextOnlyTitleDark = Template.bind({});
TextOnlyTitleDark.args = {
    title: 'Text',
};

TextOnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextOnlyDescriptionDark = Template.bind({});
TextOnlyDescriptionDark.args = {
    text: 'text',
};

TextOnlyDescriptionDark.decorators = [ThemeDecorator(Theme.DARK)];
