import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import CustomTextField from './CustomTextField';
type StoryProps = ComponentProps<typeof CustomTextField>;

const meta: Meta<StoryProps> = {
  component: CustomTextField,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CustomTextField>;
export const Primary: Story = {
  args: {
    style : { }
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
      <CustomTextField {...args} label="default" />
      <CustomTextField {...args} label="standard" variant="standard" />
      <CustomTextField {...args} label="outlined" variant="outlined" />
    </div>
  ),
};
