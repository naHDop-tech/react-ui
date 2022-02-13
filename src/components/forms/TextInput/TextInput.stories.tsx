import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextInput }  from './TextInput.component';
import { ICommonInputProps } from '../CommonInput/types'

export default {
  title: 'Tech-friday/TextInput',
  component: TextInput,
  argTypes: {
  },
} as Meta<typeof TextInput>;

const Template: Story<Omit<ICommonInputProps, 'type'>> = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Text input',
  placeholder: 'Enter your text',
};
