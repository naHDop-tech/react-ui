import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Loader } from './Loader.component';
import { ILoaderProps } from "./types"

export default {
  title: 'Tech-friday/Loader',
  component: Loader,
  argTypes: {
  },
} as Meta<typeof Loader>;

const Template: Story<ILoaderProps> = (args) => <Loader {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};