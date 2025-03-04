import { ComponentProps } from 'react';
import CustomButton from './CustomButton';
import { Meta, StoryObj } from '@storybook/react';
import { Person2Outlined } from '@mui/icons-material';

type StoryProps = ComponentProps<typeof CustomButton>;

const meta: Meta<StoryProps> = {
  component: CustomButton,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CustomButton>;
export const Primary: Story = {
  args: {
    style: { padding: '4px 8px' },
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '5px' }}>
      <CustomButton variant="contained" {...args}>
        Contained
      </CustomButton>
      <CustomButton variant="outlined" {...args}>
        Outlined
      </CustomButton>
      <CustomButton variant="text" {...args}>
        Text
      </CustomButton>
      <CustomButton variant="contained" {...args} isDisabled>
        Disabled
      </CustomButton>
      <CustomButton variant="contained" color="error" {...args}>
        Error
      </CustomButton>
      <CustomButton variant="contained" endIcon={<Person2Outlined />} {...args}>
        With Icon
      </CustomButton>
    </div>
  ),
};
