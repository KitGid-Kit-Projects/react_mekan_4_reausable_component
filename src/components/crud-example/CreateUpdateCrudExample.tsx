import { Card } from 'antd'
import SelectBox from './SelectBox'
import Input from './Input'
import TextArea from './TextArea'

export default function CreateUpdateCrudExample({
    formData,
    categoryOptions,
    handleInputChange,
    handleSelectChange
}) {
  return (
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
  )
}
