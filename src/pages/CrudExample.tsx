// Import React to enable JSX syntax and React types
import React from 'react';
// Import a reusable Input component (your own wrapper/component library)
import  Input  from "../components/Input";
// Import the custom hook that manages form state for this example
import useCrudExample from '@/hooks/crudExample/useCrudExample';

// Declare the CrudExample component using React.FC (function component)
const CrudExample: React.FC = () => {
  // Call the custom hook at the top level (React Hooks rule).
  // It returns the current form state and a curried change handler.
  const {
    formData,           // { name: string } — current form values
    handleInputChange,  // (field: keyof formData) => (e) => void — updates formData[field]
  } = useCrudExample(); // Initialize and subscribe to the hook's state

  // Render the component UI
  return (
    // A simple centered container with padding and a fixed max width
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      {/* Controlled Input bound to formData.name.
          - label: field caption shown by the reusable Input
          - placeholder: hint text inside the input
          - value: the current value from form state (keeps input controlled)
          - onChange: uses a curried handler to update the 'name' field only
          - required: marks the field as mandatory (UI/validation handled by Input) */}
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

// Export as default so other modules (e.g., App.tsx) can import it directly
export default CrudExample;
