import React, { useState } from 'react'
import {  SelectOption } from '@/components';
export default function useCrudExample() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
  });

  // Category options for the select dropdown
  const categoryOptions: SelectOption[] = [
    { label: 'Technology', value: 'technology' },
    { label: 'Education', value: 'education' },
    { label: 'Health', value: 'health' },
    { label: 'Finance', value: 'finance' },
    { label: 'Entertainment', value: 'entertainment' },
  ];

 



 



  return {
    formData, setFormData,
    categoryOptions,
  }
}
