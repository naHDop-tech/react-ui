import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextInput }  from './TextInput.component';
import { ITextInputProps } from "./types"

export default {
  title: 'Tech-friday/TextInput',
  component: TextInput,
  argTypes: {
  },
} as Meta<typeof TextInput>;

const Template: Story<ITextInputProps> = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  error: false,
  disabled: false,
  label: 'Primary',
};

export const Success = Template.bind({});
Success.args = {
  error: false,
  success:true,
  disabled: false,
  label: "Success",
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  disabled: false,
  message: "Error",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled',
};