import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from './Button.component';
import { IButtonProps } from "./types"

export default {
  title: 'Tech-friday/Button',
  component: Button,
  argTypes: {
  },
} as Meta<typeof Button>;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Continue = Template.bind({});
Continue.args = {
  disabled: false,
  label: 'Continue',
};
