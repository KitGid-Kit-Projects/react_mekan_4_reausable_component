import React, { useState } from 'react';
import { Row, Col, message } from 'antd';
import { Button, Card, Input, SelectBox, TextArea } from '../components';
import useCrudExample from '@/hooks/crudExample/useCrudExample';


/**
 * CRUD Example demonstrating reusable input components without table
 */
const CrudExample: React.FC = () => {
  // Form state
 const {
  formData,
  setFormData,
  records,
  setRecords,
  editingRecord,
  setEditingRecord,
  isSubmitting,
  setIsSubmitting,
  categoryOptions,
  handleInputChange,
  handleSelectChange,
  handleSubmit,
  handleCancelEdit
}=useCrudExample()

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
      </Row>
    </div>
  );
};

export default CrudExample;
