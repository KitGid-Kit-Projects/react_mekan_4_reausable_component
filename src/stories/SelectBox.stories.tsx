import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SelectBox } from '../components';

const meta = {
  title: 'Components/SelectBox',
  component: SelectBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A controlled Select component built on top of Ant Design. Supports searchable options, clear functionality, and validation indicators.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    required: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    allowClear: {
      control: { type: 'boolean' },
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof SelectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { label: 'Technology', value: 'technology' },
  { label: 'Education', value: 'education' },
  { label: 'Health', value: 'health' },
  { label: 'Finance', value: 'finance' },
  { label: 'Entertainment', value: 'entertainment' },
];

export const Default: Story = {
  args: {
    label: 'Category',
    options: sampleOptions,
    value: '',
    placeholder: 'Select a category',
  },
};

export const Required: Story = {
  args: {
    label: 'Priority',
    options: [
      { label: 'High', value: 'high' },
      { label: 'Medium', value: 'medium' },
      { label: 'Low', value: 'low' },
    ],
    value: '',
    required: true,
    placeholder: 'Select priority level',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Department',
    options: [
      { label: 'Engineering', value: 'engineering' },
      { label: 'Marketing', value: 'marketing' },
      { label: 'Sales', value: 'sales' },
      { label: 'Support', value: 'support' },
    ],
    value: 'engineering',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    options: sampleOptions,
    value: 'technology',
    disabled: true,
  },
};

export const NoClear: Story = {
  args: {
    label: 'Country',
    options: [
      { label: 'United States', value: 'us' },
      { label: 'United Kingdom', value: 'uk' },
      { label: 'Canada', value: 'ca' },
      { label: 'Australia', value: 'au' },
    ],
    value: 'us',
    allowClear: false,
  },
};