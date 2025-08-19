// React state hook for managing local component state.
import { useState } from "react";
// Reusable type describing label/value items for select inputs.
import type { SelectOption } from "../../types/SelectOption";

// Custom hook that encapsulates form state and change handlers for a simple CRUD example.
// Responsibility: provide inputs' values, category options, and onChange callbacks.
export default function useCrudExample() {
  // Local state holding current values for the form fields.
  // Keep keys aligned with the inputs in CreateUpdateCrudExample.
  const [formData, setFormData] = useState({
    // Free-text name/title of the record.
    name: '',
    // Selected category value (matches SelectOption.value).
    category: '',
    // Longer description captured via a textarea.
    description: '',
  });

  // Category options displayed in the category <Select> component.
  // Each option has a user-facing label and a stable string value.
  const categoryOptions: SelectOption[] = [
    { label: 'Technology', value: 'technology' },
    { label: 'Education', value: 'education' },
    { label: 'Health', value: 'health' },
    { label: 'Finance', value: 'finance' },
    { label: 'Entertainment', value: 'entertainment' },
  ];

  // Generic change handler factory for text inputs and textareas.
  // Usage: onChange={handleInputChange('name')} or onChange={handleInputChange('description')}
  const handleInputChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Merge update the specific field while preserving other values.
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  // Dedicated change handler for the category <Select>, receiving the selected value.
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  // Expose current state and handlers to consumers of this hook (pages/components).
  return {
    formData,
    categoryOptions,
    handleInputChange,
    handleSelectChange
  }
}
 