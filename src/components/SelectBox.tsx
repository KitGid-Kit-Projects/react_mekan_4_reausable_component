import React from 'react';
import { Select } from 'antd';
import { BaseComponentProps, SelectOption } from '../types/common';

// Using interface for component props
interface SelectBoxProps extends BaseComponentProps {
  label: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  allowClear?: boolean;
}

/**
 * Reusable SelectBox component built on top of Ant Design
 * 
 * @param label - Select field label
 * @param options - Array of select options
 * @param value - Controlled select value
 * @param onChange - Change handler function
 * @param placeholder - Placeholder text
 * @param required - Shows required indicator
 * @param disabled - Disables the select
 * @param allowClear - Shows clear button
 */
const SelectBox: React.FC<SelectBoxProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Please select...',
  required = false,
  disabled = false,
  allowClear = true,
  className,
  style,
}) => {
  return (
    <div className={className} style={style}>
      <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
        {label}
        {required && <span style={{ color: '#ff4d4f', marginLeft: 4 }}>*</span>}
      </label>
      <Select
        value={value || undefined}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        allowClear={allowClear}
        style={{ width: '100%' }}
        options={options}
      />
    </div>
  );
};

export default SelectBox;