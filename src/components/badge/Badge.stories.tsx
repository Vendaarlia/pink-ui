// Badge.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Badge from './Badge';
import BadgeProps from './Badge';


export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta;

const Template: StoryFn<typeof BadgeProps> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Badge',
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Badge',
  type: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  text: 'Success Badge',
  type: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  text: 'Danger Badge',
  type: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  text: 'Warning Badge',
  type: 'warning',
};

export const Outline = Template.bind({});
Outline.args = {
  text: 'Outline Badge',
  type: 'outline',
};

export const Clickable = Template.bind({});
Clickable.args = {
  text: 'Clickable Badge',
  type: 'primary',
  onClick: () => alert('Badge clicked!'),
};
