import React, { useState } from 'react';
import { Row, Col, message } from 'antd';
import { Button, Card, Input, SelectBox, TextArea } from '../components';
import useCrudExample from '@/hooks/crudExample/useCrudExample';
import CreateUpdateCrudExample from '@/components/crud-example/CreateUpdateCrudExample';


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
          <CreateUpdateCrudExample 
              formData={formData}
              categoryOptions={categoryOptions}
              handleInputChange={handleInputChange}
              handleSelectChange={handleSelectChange}
              handleSubmit={handleSubmit}
              handleCancelEdit={handleCancelEdit}
              isSubmitting={isSubmitting}
              editingRecord={editingRecord}
          />
        </Col>
      </Row>
    </div>
  );
};

export default CrudExample;
