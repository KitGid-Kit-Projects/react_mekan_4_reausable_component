import React, { useState } from 'react';
import { Row, Col, message } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Button, Card, Input, SelectBox, TextArea, Table } from '../components';
import { CrudRecord, SelectOption } from '../types/common';
import useCrudExample from '@/hooks/crudExample/useCrudExample';
import CreateUpdateCrudExample from '@/components/crud-example/CreateUpdateCrudExample';


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