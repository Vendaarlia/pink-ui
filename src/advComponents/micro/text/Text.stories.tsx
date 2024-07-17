import React from "react";
import { Meta, StoryFn } from '@storybook/react';
import Text from "./Text";
import textProps from './Text';

export default {
    title: 'Advance Components/Text',
    component: Text,
} as Meta;

const Template: StoryFn<typeof textProps> = (args) => <Text { ...args} />;

export const Default = Template.bind({});
Default.args = {
    initialValue: 'hello world',
    size: 'small',
    weight: 'light',
    color: 'primary',
    align: 'left',
    as: 'p',
};

export const Secondary = Template.bind({});
Secondary.args = {
    initialValue: 'small light secondary center',
    size: 'medium',
    weight: 'bold',
    color: 'secondary',
    align: 'center',
    as: 'p',
};

export const Muted = Template.bind({});
Muted.args = {
    initialValue: 'hello world',
    size: 'large',
    weight: 'regular',
    color: 'muted',
    align: 'right',
    as: 'p',
};

export const CustomeClass = Template.bind({});
CustomeClass.args = {
    initialValue: 'hello world',
    className: 'MT-25',
    as: 'p',
};