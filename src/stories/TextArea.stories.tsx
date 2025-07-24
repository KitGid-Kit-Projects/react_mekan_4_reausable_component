import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextArea } from '../components';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A controlled TextArea component built on top of Ant Design. Supports character counting, row customization, and validation indicators.',
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
    showCount: {
      control: { type: 'boolean' },
    },
    rows: {
      control: { type: 'number', min: 2, max: 10 },
    },
    maxLength: {
      control: { type: 'number' },
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a description',
    value: '',
    rows: 4,
  },
};

export const Required: Story = {
  args: {
    label: 'Comments',
    placeholder: 'Please provide your comments',
    value: '',
    required: true,
    rows: 3,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Review',
    placeholder: 'Write your review',
    value: 'This is a sample review text that shows how the component looks with content.',
    rows: 4,
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself (max 300 characters)',
    value: 'I am a software developer with 5 years of experience...',
    maxLength: 300,
    showCount: true,
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Read-only Field',
    value: 'This content cannot be edited.',
    disabled: true,
    rows: 3,
  },
};

export const LargeTextArea: Story = {
  args: {
    label: 'Documentation',
    placeholder: 'Enter detailed documentation',
    value: '',
    rows: 8,
    maxLength: 1000,
    showCount: true,
  },
};