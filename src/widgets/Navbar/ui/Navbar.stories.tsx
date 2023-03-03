import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
    <Navbar {...args} />
);

export const NavbarLight = Template.bind({});
NavbarLight.args = {};
NavbarLight.decorators = [StoreDecorator({
})];

export const NavbarDark = Template.bind({});
NavbarDark.args = {};
NavbarDark.decorators = [ThemeDecorator(Theme.DARK)];
NavbarDark.decorators = [StoreDecorator({
})];

export const NavbarAuth = Template.bind({});
NavbarAuth.args = {};
NavbarAuth.decorators = [StoreDecorator({
    user: { authData: {} },
})];
