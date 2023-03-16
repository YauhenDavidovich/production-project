import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '../../assets/tests/avatar.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
    }}
    >
        <Avatar {...args} />
    </div>
);

export const AvatarNormal = Template.bind({});
AvatarNormal.args = {
    alt: 'Avatar',
    size: 150,
    src: AvatarImg,
};

export const AvatarSmall = Template.bind({});
AvatarSmall.args = {
    alt: 'Avatar',
    size: 50,
    src: AvatarImg,
};
