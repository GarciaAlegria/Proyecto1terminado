import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Rectangulo2 from './Rectangulo2';

export default {
  title: 'Rectangulo2/Rectangulo',
  component: Rectangulo2,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Rectangulo2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Explore Our Cat Food',
  backgroundColor: 'white',
  buttons: [
    { label: 'KITTEN' },
    { label: 'SENIOR CAT' },
    { label: 'WET CAT' },
    { label: 'DRY CAT' },
    { label: 'GRAIN FREE' },
    { label: 'VIEW ALL', className: 'button' },
  ],
};