import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Collapsible from './Collapsible';
import CollapsibleProps from './Collapsible';


export default {
  title: 'Components/Collapsible',
  component: Collapsible,
} as Meta;

const Template: StoryFn<typeof CollapsibleProps> = (args) => <Collapsible {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Collapsible Title',
  children: 'This is the collapsible content.',
};

export const DefaultExpanded = Template.bind({});
DefaultExpanded.args = {
  title: 'Collapsible Title',
  children: 'This is the collapsible content.',
  defaultExpanded: true,
};
