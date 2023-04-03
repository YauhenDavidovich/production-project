import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const CommentListNormal = Template.bind({});
CommentListNormal.args = {
    comments: [
        {
            id: '1',
            text: 'Some comment',
            user: {
                id: '1',
                username: 'Storybook user',
            },
        },
        {
            id: '2',
            text: 'Some comment 2',
            user: {
                id: '2',
                username: 'Storybook user 2',
            },
        },
    ],
};

export const CommentListLoading = Template.bind({});
CommentListLoading.args = {
    comments: [],
    isLoading: true,
};
