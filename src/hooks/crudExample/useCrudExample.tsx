import { CrudRecord, SelectOption } from '@/components';
import { message } from 'antd';
import React, { useState } from 'react'

export default function useCrudExample() {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        description: '',
      });
    
      // Data storage (in-memory)
      const [records, setRecords] = useState<CrudRecord[]>([]);
      const [editingRecord, setEditingRecord] = useState<CrudRecord | null>(null);
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      // Category options for the select box
      const categoryOptions: SelectOption[] = [
        { label: 'Technology', value: 'technology' },
        { label: 'Education', value: 'education' },
        { label: 'Health', value: 'health' },
        { label: 'Finance', value: 'finance' },
        { label: 'Entertainment', value: 'entertainment' },
      ];
    
      // Form handlers
      const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
      };
    
      const handleSelectChange = (value: string) => {
        setFormData(prev => ({ ...prev, category: value }));
      };
    
      const handleSubmit = async () => {
        if (!formData.name.trim()) {
          message.error('Name is required');
          return;
        }
        if (!formData.category) {
          message.error('Category is required');
          return;
        }
    
        setIsSubmitting(true);
        try {
          await new Promise(resolve => setTimeout(resolve, 500));
    
          if (editingRecord) {
            setRecords(prev =>
              prev.map(record =>
                record.id === editingRecord.id ? { ...record, ...formData } : record
              )
            );
            message.success('Record updated successfully!');
            setEditingRecord(null);
          } else {
            const newRecord: CrudRecord = {
              id: Date.now().toString(),
              ...formData,
              createdAt: new Date(),
            };
            setRecords(prev => [...prev, newRecord]);
            message.success('Record created successfully!');
          }
    
          setFormData({ name: '', category: '', description: '' });
        } catch (error) {
          message.error('An error occurred. Please try again.');
        } finally {
          setIsSubmitting(false);
        }
      };
    
      const handleCancelEdit = () => {
        setEditingRecord(null);
        setFormData({ name: '', category: '', description: '' });
        message.info('Edit cancelled');
      };
  return {
    formData,
    setFormData,
    records,
    setRecords,
    editingRecord,
    setEditingRecord,
    isSubmitting,
    setIsSubmitting,
    categoryOptions,
    handleInputChange,
    handleSelectChange,
    handleSubmit,
    handleCancelEdit
  }
}
