import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from '../components';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A controlled Input component built on top of Ant Design. Includes label, validation indicators, and various input types.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number'],
    },
    required: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    value: '',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    value: '',
    required: true,
    type: 'email',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    value: 'john_doe',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    value: '',
    type: 'password',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    value: 'Cannot edit this',
    disabled: true,
  },
};

export const Number: Story = {
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    value: '',
    type: 'number',
  },
};