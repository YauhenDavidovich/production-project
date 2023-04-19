import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const ListBoxTopRight = Template.bind({});
ListBoxTopRight.args = {
    value: '123',
    direction: 'top-right',
    items: [
        { content: '121212', value: '123' },
        { content: '12121ew2', value: '124' },
        { content: '12121we2', value: '125' },
    ],
};

export const ListBoxTopLeft = Template.bind({});
ListBoxTopLeft.args = {
    value: '123',
    direction: 'top-left',
    items: [
        { content: '121212', value: '123' },
        { content: '12121ew2', value: '124' },
        { content: '12121we2', value: '125' },
    ],
};

export const ListBoxBottomLeft = Template.bind({});
ListBoxBottomLeft.args = {
    value: '123',
    direction: 'bottom-left',
    items: [
        { content: '121212', value: '123' },
        { content: '12121ew2', value: '124' },
        { content: '12121we2', value: '125' },
    ],
};

export const ListBoxBottomRight = Template.bind({});
ListBoxBottomRight.args = {
    value: '123',
    direction: 'bottom-right',
    items: [
        { content: '121212', value: '123' },
        { content: '12121ew2', value: '124' },
        { content: '12121we2', value: '125' },
    ],
};
