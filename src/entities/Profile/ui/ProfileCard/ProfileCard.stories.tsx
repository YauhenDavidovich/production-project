import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/avatar.jpg';
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

export const ProfileCardPrimary = Template.bind({});
ProfileCardPrimary.args = {
    data: {
        username: 'Test',
        country: Country.Belarus,
        age: 18,
        first: 'Test name',
        last: 'Test surname',
        currency: Currency.PLN,
        city: 'Minsk',
        avatar,
    },
};

export const ProfileCardWithError = Template.bind({});
ProfileCardWithError.args = {
    error: 'error',
};

export const ProfileCarIsLoading = Template.bind({});
ProfileCarIsLoading.args = {
    isLoading: true,
};
