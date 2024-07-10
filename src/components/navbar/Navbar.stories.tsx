import React from 'react';
import { StoryFn, Meta } from '@storybook/react/types-6-0';
import Navbar from './Navbar';
import { Nav } from './useNavbar';


export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Template: StoryFn<{ leftLinks: Nav[], rightLinks: Nav[], logoText: string }> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  leftLinks: [
    { text: 'Guild', href: '/', className: '' },
    { text: 'Work', href: '/', className: '' },
  ],
  rightLinks: [
    { text: 'Service', href: '/', className: '' },
    { text: 'Contact', href: '/', target: '_blank', className: '' },
  ],
  logoText: 'DCARDGM',
};
