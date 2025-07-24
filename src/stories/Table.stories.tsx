import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Table } from '../components';

interface SampleData {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
}

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible Table component built on top of Ant Design. Supports sorting, filtering, pagination, and custom actions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: { type: 'boolean' },
    },
    pagination: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'middle', 'large'],
    },
  },
  args: {
    onEdit: fn(),
    onDelete: fn(),
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData: SampleData[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'active',
    joinDate: '2023-01-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'User',
    status: 'active',
    joinDate: '2023-02-20',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    role: 'Editor',
    status: 'inactive',
    joinDate: '2023-03-10',
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@example.com',
    role: 'User',
    status: 'active',
    joinDate: '2023-04-05',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a: any, b: any) => a.name.localeCompare(b.name),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    filters: [
      { text: 'Admin', value: 'Admin' },
      { text: 'Editor', value: 'Editor' },
      { text: 'User', value: 'User' },
    ],
    onFilter: (value: any, record: any) => record.role === value,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <span style={{ 
        color: status === 'active' ? '#52c41a' : '#f5222d',
        fontWeight: 'bold',
        textTransform: 'capitalize',
      }}>
        {status}
      </span>
    ),
    filters: [
      { text: 'Active', value: 'active' },
      { text: 'Inactive', value: 'inactive' },
    ],
    onFilter: (value: any, record: any) => record.status === value,
  },
  {
    title: 'Join Date',
    dataIndex: 'joinDate',
    key: 'joinDate',
    sorter: (a: any, b: any) => new Date(a.joinDate).getTime() - new Date(b.joinDate).getTime(),
  },
];

export const Default: Story = {
  args: {
    columns,
    data: sampleData,
  },
};

export const WithActions: Story = {
  args: {
    columns,
    data: sampleData,
    onEdit: fn(),
    onDelete: fn(),
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: sampleData,
    loading: true,
  },
};

export const NoPagination: Story = {
  args: {
    columns,
    data: sampleData,
    pagination: false,
  },
};

export const SmallSize: Story = {
  args: {
    columns,
    data: sampleData,
    size: 'small',
  },
};

export const EmptyTable: Story = {
  args: {
    columns,
    data: [],
  },
};

export const CustomActions: Story = {
  args: {
    columns,
    data: sampleData,
    actions: [
      {
        key: 'view',
        label: 'View',
        onClick: fn(),
        type: 'primary',
      },
      {
        key: 'archive',
        label: 'Archive',
        onClick: fn(),
        type: 'default',
      },
    ],
  },
};