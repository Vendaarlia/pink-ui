import { Meta, StoryFn } from '@storybook/react';
import Accordion from './Accordion';
import AccordionProps from './Accordion'

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta<typeof AccordionProps>;

const Template: StoryFn<typeof AccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { question: 'What is your name?', answer: 'My name is John Doe.' },
    { question: 'What is your job?', answer: 'I am a software developer.' },
    { question: 'Where do you live?', answer: 'I live in New York City.' },
  ],
};
