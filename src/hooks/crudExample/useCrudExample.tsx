import React, { useState } from 'react'

export default function useCrudExample() {
      // Keep only the name field in form state
  const [formData, setFormData] = useState({
    name: '',
  });

  // Handle name input change
  const handleInputChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };
  return {
    formData,
    handleInputChange
  }
}
