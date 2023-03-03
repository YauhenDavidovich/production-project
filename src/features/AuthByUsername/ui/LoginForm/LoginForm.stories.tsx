import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
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
LoginFormPrimary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'assa' },
})];

export const LoginFormWithError = Template.bind({});
LoginFormWithError.args = {
};
LoginFormWithError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'assa', error: 'Some error' },
})];

export const LoginFormIsLoading = Template.bind({});
LoginFormIsLoading.args = {
};
LoginFormIsLoading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
