import React from 'react';
import { Story, Meta } from '@storybook/react';
import { EmailInput }  from './EmailInput.component';
import { ICommonInputProps } from '../CommonInput/types'

export default {
  title: 'Tech-friday/EmailInput',
  component: EmailInput,
  argTypes: {
  },
} as Meta<typeof EmailInput>;

const Template: Story<Omit<ICommonInputProps, 'type'>> = (args) => <EmailInput {...args} />;

export const Input = Template.bind({});

Input.args = {
  label: 'Email input',
  placeholder: 'Enter your email',
};
