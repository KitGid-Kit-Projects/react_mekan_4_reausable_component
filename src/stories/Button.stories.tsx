import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../components';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable Button component built on top of Ant Design. Supports different variants, loading states, and all standard button functionality.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    htmlType: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Loading: Story = {
  args: {
    text: 'Loading Button',
    variant: 'primary',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const Submit: Story = {
  args: {
    text: 'Submit Form',
    variant: 'primary',
    htmlType: 'submit',
  },
};