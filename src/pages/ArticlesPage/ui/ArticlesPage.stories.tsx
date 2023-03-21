import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticlePage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePage>;

const Template: ComponentStory<typeof ArticlePage> = (args) => (
    <ArticlePage {...args} />
);

export const ArticlePageNormal = Template.bind({});
ArticlePageNormal.args = {};
