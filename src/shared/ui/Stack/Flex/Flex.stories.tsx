import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
    <Flex {...args} />
);

export const FlexRow = Template.bind({});
FlexRow.args = {
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </>

    ),
};

export const FlexColumn = Template.bind({});
FlexColumn.args = {
    direction: 'column',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </>
    ),
};

export const FlexRowGap4 = Template.bind({});
FlexRowGap4.args = {
    gap: '4',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </>

    ),
};

export const FlexRowGap8 = Template.bind({});
FlexRowGap8.args = {
    gap: '8',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </>

    ),
};

export const FlexRowGap16 = Template.bind({});
FlexRowGap16.args = {
    gap: '16',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </>

    ),
};

export const FlexRowGap32 = Template.bind({});
FlexRowGap32.args = {
    gap: '32',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </>

    ),
};

export const FlexColumnGap16 = Template.bind({});
FlexColumnGap16.args = {
    direction: 'column',
    gap: '16',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </>
    ),
};

export const FlexColumnAlignEnd = Template.bind({});
FlexColumnAlignEnd.args = {
    direction: 'column',
    align: 'end',
    children: (
        <>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </>
    ),
};
