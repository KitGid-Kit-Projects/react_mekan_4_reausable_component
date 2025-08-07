import React, { useState } from 'react';
import useCrudExample from '@/hooks/crudExample/useCrudExample';
import CreateUpdateCrudExample from '@/components/crud-example/CreateUpdateCrudExample';

const CrudExample: React.FC = () => {
const {
  formData,
  categoryOptions,
  handleInputChange,
  handleSelectChange
}=useCrudExample()
  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <CreateUpdateCrudExample 
          formData={formData}
          categoryOptions={categoryOptions}
          handleInputChange={handleInputChange}
          handleSelectChange={handleSelectChange}
      />
    </div>
  );
};

export default CrudExample;
