import React, { useState } from 'react'
import { message } from 'antd';
import { ColumnsType } from 'antd/es/table';

export default function useCrudExample() {


  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
  });


  const handleInputChange = (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  /**
   * Handles form submission for both create and update operations
   */
  const handleSubmit = async () => {
    // Validate required fields
    if (!formData.name.trim()) {
      message.error('Name is required');
      return;
    }
    if (!formData.category) {
      message.error('Category is required');
      return;
    }

    try {
      console.log(formData);
      message.success('Record created successfully!');
      setFormData({ name: '', category: '', description: '' });
    } catch (error) {
      message.error('An error occurred. Please try again.');
    } finally {

    }
  };

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
    formData,
    categoryOptions,
    handleInputChange,
    handleSelectChange,
    columns,
    records,
    handleSubmit
  }
}
