import React from 'react';
import { Input as AntInput } from 'antd';
import { BaseComponentProps } from '../types/common';

// Using interface for component props
interface InputProps extends BaseComponentProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  type?: 'text' | 'email' | 'password' | 'number';
}

/**
 * Reusable Input component built on top of Ant Design
 * 
 * @param label - Input field label
 * @param placeholder - Placeholder text
 * @param value - Controlled input value
 * @param onChange - Change handler function
 * @param required - Shows required indicator
 * @param disabled - Disables the input
 * @param type - HTML input type
 */
const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  type = 'text',
  className,
  style,
}) => {
  return (
    <div className={className} style={style}>
      <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
        {label}
        {required && <span style={{ color: '#ff4d4f', marginLeft: 4 }}>*</span>}
      </label>
      <AntInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        type={type}
      />
    </div>
  );
};

export default Input;