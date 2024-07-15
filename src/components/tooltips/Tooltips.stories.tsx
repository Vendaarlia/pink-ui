// Tooltips.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tooltips from './Tooltips';
import TooltipsProps from './Tooltips';


export default {
  title: 'Components/Tooltips',
  component: Tooltips,
} as Meta;

const Template: StoryFn<typeof TooltipsProps> = (args) => (
  <Tooltips {...args}>
    <a href="/" target="_blank" rel="noopener noreferrer">this tooltip</a>
  </Tooltips>
);

export const Top = Template.bind({});
Top.args = {
  text: 'Tooltip on top',
  position: 'top',
};

export const Right = Template.bind({});
Right.args = {
  text: 'Tooltip on right',
  position: 'right',
};

export const Bottom = Template.bind({});
Bottom.args = {
  text: 'Tooltip on bottom',
  position: 'bottom',
};

export const Left = Template.bind({});
Left.args = {
  text: 'Tooltip on left',
  position: 'left',
};
