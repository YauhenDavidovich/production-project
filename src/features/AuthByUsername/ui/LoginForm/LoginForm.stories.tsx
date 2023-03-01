import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from 'shared/ui/Input/Input';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
    }}
    >
        <LoginForm {...args} />
    </div>
);

export const LoginFormPrimary = Template.bind({});
LoginFormPrimary.args = {
};
