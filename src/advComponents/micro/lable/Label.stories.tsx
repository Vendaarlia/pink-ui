import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Label from './Label';
import LabelProps from './Label';


export default {
  title: 'Advance Components/micro/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    htmlFor: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<typeof LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Label Text',
  htmlFor: 'inputId',
};
