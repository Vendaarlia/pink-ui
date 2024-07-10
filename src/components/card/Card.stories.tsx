import { Meta, StoryFn } from '@storybook/react';
import Card from './Card';
import CardProps from './Card';

export default {
    title: 'Components/Card',
    component: Card,
} as Meta<typeof CardProps>;

const Template: StoryFn<typeof CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Epic Website Development',
    textOne: 'Use our interactive trading app to gain 24 hour access to the world’s top trading markets. View live pricing for global financial assets, including ETFs, shares, stocks, gold, oil, indices and more. Use trading charts and analysis tools to find an opportunity, then place a trade!',
    textTwo: 'The Axi Trading Platform lets you trade and invest in ETFs, global stock markets and more. Become a trader and build your trading portfolio with one of the world’s best brokers!',
    imageSrc: '/public/guild.PNG'
}