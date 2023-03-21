import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/avatar.jpg';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);
export const ProfileCardLightTheme = Template.bind({});
ProfileCardLightTheme.args = {
    data: {
        username: 'Test',
        country: Country.Belarus,
        age: 36,
        first: 'Test name',
        last: 'Test surname',
        currency: Currency.PLN,
        city: 'Krakow',
        avatar,
    },
};

export const ProfileCardDarkTheme = Template.bind({});
ProfileCardDarkTheme.args = {
    data: {
        username: 'Test',
        country: Country.Belarus,
        age: 36,
        first: 'Test name',
        last: 'Test surname',
        currency: Currency.PLN,
        city: 'Minsk',
        avatar,
    },
};

ProfileCardDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const ProfileCardWithError = Template.bind({});
ProfileCardWithError.args = {
    error: 'error',
};

export const ProfileCardIsLoading = Template.bind({});
ProfileCardIsLoading.args = {
    isLoading: true,
};
