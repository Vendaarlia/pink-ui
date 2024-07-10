import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AlertWithTimer from './AlertWithTimer';
import AlertWithTimerProps from './AlertWithTimer';


export default {
  title: 'Components/AlertWithTimer',
  component: AlertWithTimer,
} as Meta;

const Template: StoryFn<typeof AlertWithTimerProps> = (args) => <AlertWithTimer {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  message: 'This is a timed normal alert',
  type: 'normal',
};

export const Danger = Template.bind({});
Danger.args = {
  message: 'This is a timed danger alert',
  type: 'danger',
};

export const CustomDuration = Template.bind({});
CustomDuration.args = {
  message: 'This alert will disappear in 5 seconds',
  type: 'normal',
  duration: 5000,
};

export const WithOnClose = Template.bind({});
WithOnClose.args = {
  message: 'This alert will disappear in 3 seconds with onClose',
  type: 'normal',
  duration: 3000,
  onClose: () => alert('Alert closed'),
};
