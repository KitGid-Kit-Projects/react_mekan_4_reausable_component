import React, { useState } from 'react';
import { Row, Col, message } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Button, Card, Input, SelectBox, TextArea, Table } from '../components';
import { CrudRecord, SelectOption } from '../types/common';

/**
 * CRUD Example Component
 * 
 * Demonstrates a complete CRUD (Create, Read, Update, Delete) interface using:
 * - Reusable form components
 * - In-memory data management
 * - Ant Design layout components
 * - Table with sorting/filtering capabilities
 * 
 * Features:
 * - Form validation
 * - Edit state management
 * - Loading states
 * - User feedback (success/error messages)
 */
const CrudExample: React.FC = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
  });

  // Data storage (simulating a database)
  const [records, setRecords] = useState<CrudRecord[]>([]);
  const [editingRecord, setEditingRecord] = useState<CrudRecord | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

      if (editingRecord) {
        // Update existing record
        setRecords(prev =>
          prev.map(record =>
            record.id === editingRecord.id
              ? { ...record, ...formData }
              : record
          )
        );
        message.success('Record updated successfully!');
        setEditingRecord(null);
      } else {
        // Create new record
        const newRecord: CrudRecord = {
          id: Date.now().toString(),
          ...formData,
          createdAt: new Date(),
        };
        setRecords(prev => [...prev, newRecord]);
        message.success('Record created successfully!');
      }

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
  const handleEdit = (record: CrudRecord) => {
    setFormData({
      name: record.name,
      category: record.category,
      description: record.description,
    });
    setEditingRecord(record);
    message.info('Record loaded for editing');
  };

  /**
   * Deletes a record from the data
   * @param record - The record to delete
   */
  const handleDelete = (record: CrudRecord) => {
    setRecords(prev => prev.filter(r => r.id !== record.id));
    message.success('Record deleted successfully!');
    
    // Clear edit state if deleting the record being edited
    if (editingRecord?.id === record.id) {
      setEditingRecord(null);
      setFormData({ name: '', category: '', description: '' });
    }
  };

  /**
   * Cancels the current edit operation
   */
  const handleCancelEdit = () => {
    setEditingRecord(null);
    setFormData({ name: '', category: '', description: '' });
    message.info('Edit cancelled');
  };

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

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Responsive layout using Ant Design Grid */}
      <Row gutter={[24, 24]}>
        {/* Form Section (left column on desktop) */}
        <Col xs={24} lg={8}>
          <Card
            title={editingRecord ? 'Edit Record' : 'Create New Record'}
            footer={
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                {editingRecord && (
                  <Button
                    text="Cancel"
                    onClick={handleCancelEdit}
                    variant="secondary"
                  />
                )}
                <Button
                  text={editingRecord ? 'Update' : 'Create'}
                  onClick={handleSubmit}
                  variant="primary"
                  loading={isSubmitting}
                />
              </div>
            }
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Name Input Field */}
              <Input
                label="Name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleInputChange('name')}
                required
              />
              
              {/* Category Select Dropdown */}
              <SelectBox
                label="Category"
                options={categoryOptions}
                value={formData.category}
                onChange={handleSelectChange}
                placeholder="Select a category"
                required
              />
              
              {/* Description Text Area */}
              <TextArea
                label="Description"
                placeholder="Enter description"
                value={formData.description}
                onChange={handleInputChange('description')}
                rows={4}
                maxLength={500}
                showCount
              />
            </div>
          </Card>
        </Col>

        {/* Table Section (right column on desktop) */}
        <Col xs={24} lg={16}>
          <Card title="Records" style={{ height: 'fit-content' }}>
            <Table
              columns={columns}
              data={records}
              onEdit={handleEdit}
              onDelete={handleDelete}
              pagination={records.length > 10}
              size="middle"
            />
            {/* Empty state message */}
            {records.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
                No records found. Create your first record using the form.
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CrudExample;