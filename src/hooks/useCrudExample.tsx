import React, { useState } from 'react'
import { Row, Col, message } from 'antd';
import { ColumnsType } from 'antd/es/table'; 


export default function useCrudExample() {

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
  });

  // Data storage (simulating a database)
  const [records, setRecords] = useState<any[]>([]);
  const [editingRecord, setEditingRecord] = useState<any | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);



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

    setIsSubmitting(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));

        // Create new record
        const newRecord: any = {
          id: Date.now().toString(),
          ...formData,
          createdAt: new Date(),
        };
        setRecords(prev => [...prev, newRecord]);
        message.success('Record created successfully!');
      

      // Reset form
      setFormData({ name: '', category: '', description: '' });
    } catch (error) {
      message.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Loads a record into the form for editing
   * @param record - The record to edit
   */

  /**
   * Deletes a record from the data
   * @param record - The record to delete
   */
 
 

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
    formData, setFormData,
    categoryOptions,
    handleInputChange,
    handleSelectChange,
    handleSubmit,
    columns,
    records,
    editingRecord, setEditingRecord,
    isSubmitting, setIsSubmitting
  }
}
