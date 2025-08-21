
import React from 'react'
import Card from './Card'
import Button from './Button'
import Input from './Input'
import SelectBox from './SelectBox'
import TextArea from './TextArea'

export default function CreateUpdateCrudExample({
  categoryOptions,
}) {
  return (
    <Card
    title={'Create New Record'}
    footer={
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
       
        <Button
       
          // onClick={handleSubmit}
          variant="primary"
        />
      </div>
    }
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input
        label="Name"
        placeholder="Enter name"
        // onChange={handleInputChange('name')}
        required
      />

      <SelectBox
        label="Category"
        options={categoryOptions}
        placeholder="Select a category"
        required
      />

      <TextArea
        label="Description"
        placeholder="Enter description"
        // onChange={handleInputChange('description')}
        rows={4}
        maxLength={500}
        showCount
      />
    </div>
  </Card>
  )
}