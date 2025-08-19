// Example page showcasing how to wire CRUD form state and UI together.
// This component consumes a custom hook for state/handlers and passes them
// to a presentational form component for rendering.
import React from 'react';

// Form component responsible purely for UI/rendering and callbacks.
// Note: explicit .tsx extension is used here; most bundlers allow omitting it.
import CreateUpdateCrudExample from '../components/crud-example/CreateUpdateCrudExample.tsx';

// Custom hook that encapsulates form state (formData), select options, and
// change handlers for inputs/selects to keep the page component minimal.
import useCrudExample from '../hooks/crudExample/useCrudExample';

// Functional component typed with React.FC for clarity.
// Note: React.FC adds an implicit children prop, though it's not used here.
const CrudExample: React.FC = () => {
  // Pull reactive state and event handlers from the custom hook.
  const {
    formData, // Current values for all form fields (name, category, description, etc.).
    categoryOptions, // Options to populate the Category <Select> component.
    handleInputChange, // onChange handler for text inputs/textarea.
    handleSelectChange, // onChange handler for select dropdown.
  } = useCrudExample();
  return (
    // Simple centered container with constrained width for readability.
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      {/* Presentational form component receives state and callbacks as props. */}
      <CreateUpdateCrudExample 
        // Current form state object the inputs will read from.
        formData={formData}
        // Select dropdown options for the category field.
        categoryOptions={categoryOptions}
        // Text input/textarea change handler.
        handleInputChange={handleInputChange}
        // Select change handler.
        handleSelectChange={handleSelectChange}
      />
    </div>
  );
};

export default CrudExample;
