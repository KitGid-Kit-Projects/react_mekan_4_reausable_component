// Import React for type namespaces (React.ChangeEvent) and useState for state management
import React, { useState } from 'react'

// Export the custom hook as default so it can be imported easily elsewhere
export default function useCrudExample() {
  // Initialize local form state with a single "name" field
  const [formData, setFormData] = useState({
    name: '',
  });

  // Curried change handler:
  // 1) accepts a field name (e.g., 'name')
  // 2) returns an event handler for <input> change events
  const handleInputChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Update only the targeted field while preserving the rest of the form state
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  // Expose state and handlers to the component that uses this hook
  return {
    formData,
    handleInputChange
  }
}
