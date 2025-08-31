import React from 'react';
import { Row, Col } from 'antd';
import useCrudExample from '../hooks/useCrudExample.tsx';
import CreateUpdateCrudExample from '../components/CreateUpdateCrudExample.tsx';
import TabelCrudExample from '../components/TableCrudExample.tsx';

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
    columns,
    records,
    editingRecord, setEditingRecord,
    isSubmitting, setIsSubmitting
  } = useCrudExample()

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Responsive layout using Ant Design Grid */}
      <Row gutter={[24, 24]}>
        {/* Form Section (left column on desktop) */}
        <Col xs={24} lg={8}>
          <CreateUpdateCrudExample
            formData={formData}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            editingRecord={editingRecord}
            categoryOptions={categoryOptions}
          />
        </Col>

        {/* Table Section (right column on desktop) */}
        <Col xs={24} lg={16}>
          <TabelCrudExample
            columns={columns}
            records={records}
          />
        </Col>
      </Row>
    </div>
  );
};

export default CrudExample;