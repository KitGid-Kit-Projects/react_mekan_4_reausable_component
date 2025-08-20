import React, { useState } from 'react'
import { ColumnsType } from 'antd/es/table';
import { CrudRecord, SelectOption } from '@/components';
export default function useCrudExample() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
  });

  // Data storage (simulating a database)
  const [records, setRecords] = useState<CrudRecord[]>([]);


  // Category options for the select dropdown
  const categoryOptions: SelectOption[] = [
    { label: 'Technology', value: 'technology' },
    { label: 'Education', value: 'education' },
    { label: 'Health', value: 'health' },
    { label: 'Finance', value: 'finance' },
    { label: 'Entertainment', value: 'entertainment' },
  ];

  /**
   * Handles input changes for form fields
   * @param field - The field name to update
   * @returns Change event handler
   */
  const handleInputChange = (field: string) => 
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

  /**
   * Handles select dropdown changes
   * @param value - The selected value
   */
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  /**
   * Handles form submission for both create and update operations
   */


  /**
   * Loads a record into the form for editing
   * @param record - The record to edit
   */
  /**
   * Deletes a record from the data
   * @param record - The record to delete
   */


  /**
   * Cancels the current edit operation
   */

  // Table column configuration
  const columns: ColumnsType<CrudRecord> = [
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
  }
}
