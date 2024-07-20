import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input from './Input';
import InputProps from './Input';


export default {
  title: 'Advance Components/micro/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    errorMessage: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<typeof InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter your name',
};

export const WithError = Template.bind({});
WithError.args = {
  placeholder: 'Enter your email',
  errorMessage: 'This field is required',
};
