// ListTable.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RowTable from './RowTable';
import RowTableProps from './RowTable';

export default {
  title: 'Advance Components/bundle/table_Interactive/RowTable',
  component: RowTable,
} as Meta;

const Template: StoryFn<typeof RowTableProps> = (args) => <RowTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Sample Name',
  tags: 'Sample Tags',
  price: 123,
  imgSrc: 'guild.PNG'
};
