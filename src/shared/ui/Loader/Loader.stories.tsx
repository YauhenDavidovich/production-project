import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

export default {
    title: 'shared/Modal',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
    }}
    >
        <Loader {...args} />
    </div>
);

export const LoaderNormal = Template.bind({});
LoaderNormal.args = {};

export const LoaderDark = Template.bind({});
LoaderDark.args = {};

LoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
