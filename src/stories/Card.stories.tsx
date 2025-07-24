import type { Meta, StoryObj } from '@storybook/react';
import { Card, Button } from '../components';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible Card component built on top of Ant Design. Supports title, children content, and optional footer actions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    hoverable: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default Card',
    children: (
      <div>
        <p>This is the card content. You can put any React components here.</p>
        <p>Cards are great for organizing related information together.</p>
      </div>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card with Footer',
    children: (
      <div>
        <p>This card has a footer with action buttons.</p>
        <p>Perfect for forms or interactive content.</p>
      </div>
    ),
    footer: (
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <Button text="Cancel" variant="secondary" />
        <Button text="Save" variant="primary" />
      </div>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    title: 'Hoverable Card',
    hoverable: true,
    children: (
      <div>
        <p>This card has a hover effect.</p>
        <p>Try hovering over it to see the shadow change.</p>
      </div>
    ),
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading Card',
    loading: true,
    children: (
      <div>
        <p>This content will be replaced with a loading skeleton.</p>
      </div>
    ),
  },
};