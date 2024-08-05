// ImageDungeon.sories.tsx

import React from "react";
import { Meta, StoryFn } from '@storybook/react';
import ImageDungeon from "./ImageDungeon";
import ImageDungeonProps from "./ImageDungeon";

export default {
    title: 'Advance Components/micro/Image/varian/ImageDungeon',
    component: ImageDungeon,
} as Meta;

const Template: StoryFn<typeof ImageDungeonProps> = (args) => <ImageDungeon {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: '/hardiHarzi.png',
    gifSrc: '/hardi.gif',
}