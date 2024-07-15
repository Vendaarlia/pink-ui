import { Meta, StoryFn } from '@storybook/react/*';
import Hero from './Hero';
import HeroProps from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
} as Meta<typeof HeroProps>;

const Template: StoryFn<typeof HeroProps> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Welcome to Our Website',
  imageUrl: '/guild.PNG',
};
