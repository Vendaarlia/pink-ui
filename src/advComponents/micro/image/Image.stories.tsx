// Image.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Image from './Image';
import ImageProps from './Image';


export default {
  title: 'Advance Components/micro/Image',
  component: Image,
} as Meta;

const Template: StoryFn<typeof ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Default Image',
  width: 300,
  height: 300,
};

export const LazyLoad = Template.bind({});
LazyLoad.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Lazy Loaded Image',
  width: 300,
  height: 300,
  lazyLoad: true,
};

export const WithFallback = Template.bind({});
WithFallback.args = {
  src: 'invalid.jpg',
  alt: 'Image with Fallback',
  width: 300,
  height: 300,
  fallbackSrc: 'https://via.placeholder.com/300',
};