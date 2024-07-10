import { Meta, StoryFn } from '@storybook/react';
import Subhero from './Subhero';
import SubheroProps from './Subhero';


export default {
  title: 'Components/Subhero',
  component: Subhero,
} as Meta<typeof SubheroProps>;

const Template: StoryFn<typeof SubheroProps> = (args) => <Subhero {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Hero Title',
  subtitle: 'Hero Subtitle',
  imageSrc: '/public/guild.PNG',
  description: 'This is the subhero description.',
};
