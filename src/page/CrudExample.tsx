import React from 'react';
import { Input } from '../components';
import useCrudExample from '@/hooks/crudExample/useCrudExample';

const CrudExample: React.FC = () => {
const {
  formData,
  handleInputChange
}=useCrudExample()

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
        <Input
          label="Name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleInputChange('name')}
          required
        />
    </div>
  );
};

export default CrudExample;
