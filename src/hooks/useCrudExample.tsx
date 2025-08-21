import React, { useState } from 'react'
import { Row, Col, message } from 'antd';
import { ColumnsType } from 'antd/es/table';
export default function useCrudExample() {


  // Data storage (simulating a database)
  const [records, setRecords] = useState<any[]>([]);

  // Category options for the select dropdown
  const categoryOptions: any[] = [
    { label: 'Technology', value: 'technology' },
    { label: 'Education', value: 'education' },
    { label: 'Health', value: 'health' },
    { label: 'Finance', value: 'finance' },
    { label: 'Entertainment', value: 'entertainment' },
  ];

  // Table column configuration
  const columns: ColumnsType<any> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name), // Alphabetical sorting
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      filters: categoryOptions.map(opt => ({ text: opt.label, value: opt.value })),
      onFilter: (value, record) => record.category === value, // Category filtering
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true, // Truncate long text
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: Date) => date.toLocaleDateString(), // Format date
      sorter: (a, b) => a.createdAt.getTime() - b.createdAt.getTime(), // Date sorting
    },
  ];
  return {
    categoryOptions,
    records,
    columns
  }
}