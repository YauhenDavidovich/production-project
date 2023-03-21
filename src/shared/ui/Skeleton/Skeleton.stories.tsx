import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const SkeletonNormal = Template.bind({});
SkeletonNormal.args = {
    height: 200,
    width: '100%',
};

export const SkeletonCircle = Template.bind({});
SkeletonCircle.args = {
    borderRadius: '100%',
    height: 100,
    width: 100,
};

export const SkeletonNormalDark = Template.bind({});
SkeletonNormalDark.args = {
    height: 200,
    width: '100%',
};

SkeletonNormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SkeletonCircleDark = Template.bind({});
SkeletonCircleDark.args = {
    borderRadius: '100%',
    height: 100,
    width: 100,
};

SkeletonCircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SkeletonNormalAwesome = Template.bind({});
SkeletonNormalAwesome.args = {
    height: 200,
    width: '100%',
};

SkeletonNormalAwesome.decorators = [ThemeDecorator(Theme.AWESOME)];

export const SkeletonCircleAwesome = Template.bind({});
SkeletonCircleAwesome.args = {
    borderRadius: '100%',
    height: 100,
    width: 100,
};

SkeletonCircleAwesome.decorators = [ThemeDecorator(Theme.AWESOME)];
