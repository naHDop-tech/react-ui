import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CommonInput }  from './CommonInput.component';
import { ICommonInputProps } from "./types"

export default {
  title: 'Tech-friday/CommonInput',
  component: CommonInput,
  argTypes: {
  },
} as Meta<typeof CommonInput>;

const Template: Story<ICommonInputProps> = (args) => <CommonInput {...args} />;

export const BaseInput = Template.bind({});

BaseInput.args = {
  placeholder: 'Text here'
};
