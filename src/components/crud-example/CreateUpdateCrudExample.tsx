// UI container component from Ant Design used to frame the form.
import { Card } from 'antd'
// Local, lightweight input components used by this presentational form.
import SelectBox from './SelectBox'
import Input from './Input'
import TextArea from './TextArea'

// Presentational form component for creating/updating a simple record.
// Receives all state and handlers via props (no internal state here) so it can
// be reused in different pages or modals.
export default function CreateUpdateCrudExample({
    // Current values for the form fields (e.g., { name, category, description }).
    formData,
    // Options for the Category select, each with label/value.
    categoryOptions,
    // Factory that returns an onChange handler for a given text field name.
    handleInputChange,
    // onChange handler for the Category select component.
    handleSelectChange
}) {
  return ( 
    // Card provides a titled, padded container around the form fields.
    <Card title="Simple Form">
      {/* Vertical stack layout with consistent spacing between fields. */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Name input: single-line text field bound to formData.name. */}
        <Input
          label="Name" // Field label rendered by the Input component
          placeholder="Enter name" // Helper text shown when the field is empty
          value={formData.name} // Controlled value from parent state
          onChange={handleInputChange('name')} // Updates formData.name when user types
          required // Marks the field as required in the UI
        />

        {/* Category select: dropdown bound to formData.category using provided options. */}
        <SelectBox
          label="Category" // Field label for the dropdown
          options={categoryOptions} // Array of { label, value } used to populate options
          value={formData.category} // Controlled selected value
          onChange={handleSelectChange} // Updates the category value
          placeholder="Select a category" // Prompt text when no selection is made
          required // Indicates selection is required
        />

        {/* Description textarea: multi-line input with length constraints and counter. */}
        <TextArea
          label="Description" // Field label for the textarea
          placeholder="Enter description" // Helper text for users
          value={formData.description} // Controlled text content
          onChange={handleInputChange('description')} // Updates formData.description
          rows={4} // Initial visible rows height
          maxLength={500} // Character limit to guide user input
          showCount // Displays current character count vs. max
        />
      </div>
    </Card>
  )
}
