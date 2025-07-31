import React, { useState } from 'react';
import { Card } from 'antd';
import { Input } from '../components';

const CrudExample: React.FC = () => {
  // Keep only the name field in form state
  const [formData, setFormData] = useState({
    name: '',
  });

  // Handle name input change
  const handleInputChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

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
