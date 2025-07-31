import React, { useState } from 'react';
import { Row, Col, message } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Button, Card, Input, SelectBox, TextArea, Table } from '../components';
import { CrudRecord, SelectOption } from '../types/common';
import useCrudExample from '@/hooks/crudExample/useCrudExample';

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
const {
  formData, setFormData,
  categoryOptions,
  handleInputChange,
  handleSelectChange,
  handleSubmit,
  handleEdit,
  handleDelete,
  handleCancelEdit,
  columns,
  records,
  editingRecord, setEditingRecord,
  isSubmitting, setIsSubmitting
}=useCrudExample()

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