import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Alert from './Alert';
import AlertProps from './Alert';


export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

const Template: StoryFn< typeof AlertProps> = (args) => <Alert {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  message: 'This is a normal alert',
  type: 'normal',
};

export const Danger = Template.bind({});
Danger.args = {
  message: 'This is a danger alert',
  type: 'danger',
};

export const Closable = Template.bind({});
Closable.args = {
  message: 'This alert can be closed',
  onClose: () => alert('Alert closed'),
};
