import React, { useState } from 'react';
import { Row, Col, message } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Button, Card, Input, SelectBox, TextArea, Table } from '../components';
import { CrudRecord, SelectOption } from '../types/common';

/**
 * CRUD Example demonstrating the usage of reusable components
 * This example shows:
 * - Form creation with validation
 * - In-memory data management
 * - Table display with actions
 * - Edit and delete functionality
 */
const CrudExample: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
  });

  // Data storage (in-memory)
  const [records, setRecords] = useState<CrudRecord[]>([]);
  const [editingRecord, setEditingRecord] = useState<CrudRecord | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Category options for the select box
  const categoryOptions: SelectOption[] = [
    { label: 'Technology', value: 'technology' },
    { label: 'Education', value: 'education' },
    { label: 'Health', value: 'health' },
    { label: 'Finance', value: 'finance' },
    { label: 'Entertainment', value: 'entertainment' },
  ];

  // Form handlers
  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleSubmit = async () => {
    // Basic validation
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

  const handleEdit = (record: CrudRecord) => {
    setFormData({
      name: record.name,
      category: record.category,
      description: record.description,
    });
    setEditingRecord(record);
    message.info('Record loaded for editing');
  };

  const handleDelete = (record: CrudRecord) => {
    setRecords(prev => prev.filter(r => r.id !== record.id));
    message.success('Record deleted successfully!');
    
    // Clear edit state if deleting the record being edited
    if (editingRecord?.id === record.id) {
      setEditingRecord(null);
      setFormData({ name: '', category: '', description: '' });
    }
  };

  const handleCancelEdit = () => {
    setEditingRecord(null);
    setFormData({ name: '', category: '', description: '' });
    message.info('Edit cancelled');
  };

  // Table column definitions
  const columns: ColumnsType<CrudRecord> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      filters: categoryOptions.map(opt => ({ text: opt.label, value: opt.value })),
      onFilter: (value, record) => record.category === value,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: Date) => date.toLocaleDateString(),
      sorter: (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
    },
  ];

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <Row gutter={[24, 24]}>
        {/* Form Section */}
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
              <Input
                label="Name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleInputChange('name')}
                required
              />
              
              <SelectBox
                label="Category"
                options={categoryOptions}
                value={formData.category}
                onChange={handleSelectChange}
                placeholder="Select a category"
                required
              />
              
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

        {/* Table Section */}
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