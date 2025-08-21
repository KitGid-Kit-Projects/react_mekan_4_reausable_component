
import React from 'react'
import Card from './Card'
import Button from './Button'
import Input from './Input'
import SelectBox from './SelectBox'
import TextArea from './TextArea'

export default function CreateUpdateCrudExample({
  formData,
  categoryOptions,
  handleInputChange,
  handleSelectChange,
  handleSubmit

}) {
  return (
    <Card
    title={ 'Create New Record'}
    footer={
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
       
        <Button
          text={'Create'}
          onClick={handleSubmit}
          variant="primary"
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
  )
}

