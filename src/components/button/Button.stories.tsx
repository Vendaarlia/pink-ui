import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import './Button.module.css';


export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      description: 'Defines the type/style of the button',
    },
    isLoading: {
      control: 'boolean',
      description: 'Indicates if the button is in a loading state',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Indicates if the button is disabled',
    },
    onClick: {
      action: 'clicked',
      description: 'Function to handle button click events',
    },
    children: {
      control: 'text',
      description: 'Button label or content',
    },
  },
} as Meta<typeof Button>;


const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'Secondary Button',
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  children: 'Danger Button',
};

export const Loading = Template.bind({});
Loading.args = {
  type: 'primary',
  isLoading: true,
  children: 'Submit...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'primary',
  isDisabled: true,
  children: 'Disabled Button',
};

export const WithCustomOnClick = Template.bind({});
WithCustomOnClick.args = {
  type: 'primary',
  children: 'Click me!',
  onClick: () => alert('Button clicked!'),
};
