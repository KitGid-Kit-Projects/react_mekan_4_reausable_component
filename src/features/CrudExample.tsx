import React, { useState } from 'react';
import { Card } from 'antd';
import { Input, SelectBox, TextArea } from '../components';
import { SelectOption } from '../types/common';

const CrudExample: React.FC = () => {
  // Only the form state
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
  });

  // Category options
  const categoryOptions: SelectOption[] = [
    { label: 'Technology', value: 'technology' },
    { label: 'Education', value: 'education' },
    { label: 'Health', value: 'health' },
    { label: 'Finance', value: 'finance' },
    { label: 'Entertainment', value: 'entertainment' },
  ];

  // Generic change handler
  const handleInputChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <Card title="Simple Form">
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
    </div>
  );
};

export default CrudExample;
