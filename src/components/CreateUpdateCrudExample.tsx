
import Card from './Card.tsx' // - Custom Card wrapper component for consistent styling and layout structure
import Button from './Button.tsx' // - Custom Button component with loading states and variant styling
import Input from './Input.tsx' // - Custom Input component with label and validation indicator support
import SelectBox from './SelectBox.tsx' // - Custom SelectBox component for dropdown selection with options
import TextArea from './TextArea.tsx' // - Custom TextArea component for multi-line text input with character counting

export default function CreateUpdateCrudExample({
  formData, // - Object containing current form field values (name, category, description)
  categoryOptions, // - Array of dropdown options for category selection
  handleInputChange, // - Curried function for handling text input and textarea changes
  handleSelectChange, // - Function for handling dropdown selection changes
  handleSubmit, // - Async function for form submission (create/update operations)
  handleCancelEdit, // - Function to cancel edit mode and clear form
  isSubmitting, // - Boolean loading state to show submission progress
  editingRecord ,// - Current record being edited (null for create mode)
  countryOptions,
  handleSelectCountryChange
}:any) { // - Form component that handles both create and update operations based on editingRecord state
  return (
    <Card
    title={editingRecord ? 'Edit Record' : 'Create New Record'} // - Dynamic title based on form mode (edit vs create)
    footer={
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>  
        {editingRecord && (
          <Button
            text="Cancel" // - Cancel button text
            onClick={handleCancelEdit} // - Handler to exit edit mode and clear form
            variant="secondary" // - Secondary styling to distinguish from primary action
          />
        )}  
        <Button
          text={editingRecord ? 'Update' : 'Create'} // - Dynamic button text based on form mode
          onClick={handleSubmit} // - Handler for form submission with validation
          variant="primary" // - Primary button styling for main action
          loading={isSubmitting} // - Show loading spinner during form submission
        />
      </div>
    } // - Footer with conditional Cancel button and dynamic Submit button
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>  
        <Input
          label="Name"
          placeholder="Enter name"
          value={formData.name}
          handleInputChange={handleInputChange('name')}
          required
        />
        <Input
          label="Surname"
          placeholder="Enter surname"
          value={formData.surname}
          handleInputChange={handleInputChange('surname')}
          required
        />
        <Input
          label="Email"
          placeholder="Enter email"
          value={formData.email}
          handleInputChange={handleInputChange('email')}
          required
        />

        <SelectBox
          label="Category"
          options={categoryOptions}
          value={formData.category}
          handleSelectChange={handleSelectChange}
          placeholder="Select a category"
          required
        />
                <SelectBox
          label="Country"
          options={countryOptions}
          value={formData.country}
          handleSelectChange={handleSelectCountryChange}
          placeholder="Select a Country"
          required
        />
  

      <TextArea
        label="Description" // - Field label for multi-line text input
        placeholder="Enter description" // - Hint text to guide user input
        value={formData.description} // - Controlled textarea value from form state
        handleInputChange={handleInputChange('description')} // - Handler for description field changes
        rows={4} // - Set textarea height to 4 visible rows
        maxLength={500} // - Limit description to 500 characters
        showCount // - Display character counter for user feedback
      /> 
    </div>
  </Card> // - Card wrapper provides visual container with title and action buttons
  )
}

