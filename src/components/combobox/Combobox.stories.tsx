import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Combobox from './Combobox';
import ComboboxProps from './Combobox';


export default {
  title: 'Components/Combobox',
  component: Combobox,
} as Meta;

const Template: StoryFn<typeof ComboboxProps> = (args) => <Combobox {...args} />;

export const LightTheme = Template.bind({});
LightTheme.args = {
  suggestions: ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'],
  onSelect: (value: string) => alert(`Selected: ${value}`),
  placeholder: 'Search...',
  theme: 'light',
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  suggestions: ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'],
  onSelect: (value: string) => alert(`Selected: ${value}`),
  placeholder: 'Search...',
  theme: 'dark',
};
