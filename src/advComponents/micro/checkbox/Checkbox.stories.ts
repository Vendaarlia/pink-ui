import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Checkbox from './Checkbox';
import CheckboxProps from './Checkbox';


export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<typeof CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox Label',
  checked: false,
};
