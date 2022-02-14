import React from 'react';
import { Story, Meta } from '@storybook/react';
import { NumberInput }  from './NumberInput.component';
import { ICommonInputProps } from '../CommonInput/types'

export default {
  title: 'Tech-friday/NumberInput',
  component: NumberInput,
  argTypes: {
  },
} as Meta<typeof NumberInput>;

const Template: Story<Omit<ICommonInputProps, 'type'>> = (args) => <NumberInput {...args} />;

export const Input = Template.bind({});

Input.args = {
  label: 'Number input',
  placeholder: 'Enter your amount',
};
