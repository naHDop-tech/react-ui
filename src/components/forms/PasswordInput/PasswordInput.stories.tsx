import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PasswordInput }  from './PasswordInput.component';
import { ICommonInputProps } from '../CommonInput/types'

export default {
  title: 'Tech-friday/PasswordInput',
  component: PasswordInput,
  argTypes: {
  },
} as Meta<typeof PasswordInput>;

const Template: Story<Omit<ICommonInputProps, 'type'>> = (args) => <PasswordInput {...args} />;

export const Input = Template.bind({});

Input.args = {
  label: 'Password',
  placeholder: 'Enter your password',
};
