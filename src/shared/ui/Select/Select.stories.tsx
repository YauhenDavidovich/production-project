import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
    }}
    >
        <Select {...args} />
    </div>
);

export const SelectPrimary = Template.bind({});
SelectPrimary.args = {
    label: 'Choose variant',
    options: [{ value: '1', content: 'First variant' }, { value: '2', content: 'Second variant' }],
};
