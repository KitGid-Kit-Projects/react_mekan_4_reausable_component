import { SelectOption } from "@/components";
import { useState } from "react";

export default function useCrudExample() {
      // Only the form state
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
  });

  // Category options
  const categoryOptions: SelectOption[] = [
    { label: 'Technology', value: 'technology' },
    { label: 'Education', value: 'education' },
    { label: 'Health', value: 'health' },
    { label: 'Finance', value: 'finance' },
    { label: 'Entertainment', value: 'entertainment' },
  ];

  // Generic change handler
  const handleInputChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  return {
    formData,
    categoryOptions,
    handleInputChange,
    handleSelectChange
  }
}
 