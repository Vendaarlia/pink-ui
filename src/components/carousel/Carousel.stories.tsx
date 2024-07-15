import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Carousel from './Carousel';
import CarouselProps from './Carousel';


export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta;

const Template: StoryFn<typeof CarouselProps> = (args) => <Carousel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  slides: [<div key="1">Slide 1</div>, <div key="2">Slide 2</div>, <div key="3">Slide 3</div>],
};

export const AutoPlay = Template.bind({});
AutoPlay.args = {
  slides: [<div key="1">Slide 1</div>, <div key="2">Slide 2</div>, <div key="3">Slide 3</div>],
  autoPlay: true,
  interval: 2000,
};

export const ControlsOff = Template.bind({});
ControlsOff.args = {
  slides: [<div key="1">Slide 1</div>, <div key="2">Slide 2</div>, <div key="3">Slide 3</div>],
  controls: false,
};

export const IndicatorsOff = Template.bind({});
IndicatorsOff.args = {
  slides: [<div key="1">Slide 1</div>, <div key="2">Slide 2</div>, <div key="3">Slide 3</div>],
  indicators: false,
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  slides: [<div key="1">Slide 1</div>, <div key="2">Slide 2</div>, <div key="3">Slide 3</div>],
  theme: 'dark',
};

export const SlideTransition = Template.bind({});
SlideTransition.args = {
  slides: [<div key="1">Slide 1</div>, <div key="2">Slide 2</div>, <div key="3">Slide 3</div>],
  transition: 'slide',
};

export const ZoomTransition = Template.bind({});
ZoomTransition.args = {
  slides: [<div key="1">Slide 1</div>, <div key="2">Slide 2</div>, <div key="3">Slide 3</div>],
  transition: 'zoom',
};

export const FlipTransition = Template.bind({});
FlipTransition.args = {
  slides: [<div key="1"><img src="/guild.PNG" alt="" /></div>, <div key="2"><img src="/guild.PNG" alt="" /></div>, <div key="3"><img src="/guild.PNG" alt="" /></div>],
  transition: 'flip',
};
