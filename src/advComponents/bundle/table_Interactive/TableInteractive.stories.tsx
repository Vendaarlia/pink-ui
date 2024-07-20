// TableInteractive.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TableInteractive from './TableInteractive';
import RowTableProps from './RowTable'


export default {
  title: 'Advance Components/bundle/TableInteractive',
  component: TableInteractive,
} as Meta;

const Template: StoryFn<typeof RowTableProps> = (args) => <TableInteractive />;

export const Default = Template.bind({});
Default.args = {
    name: 'Sample Name',
  tags: 'Sample Tags',
  price: 123,
  imgSrc: '/guild.PNG'
};
