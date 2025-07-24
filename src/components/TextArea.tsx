import React from 'react';
import { Input } from 'antd';
import { BaseComponentProps } from '../types/common';

const { TextArea: AntTextArea } = Input;

// Using interface for component props
interface TextAreaProps extends BaseComponentProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  maxLength?: number;
  showCount?: boolean;
}

/**
 * Reusable TextArea component built on top of Ant Design
 * 
 * @param label - TextArea field label
 * @param placeholder - Placeholder text
 * @param value - Controlled textarea value
 * @param onChange - Change handler function
 * @param required - Shows required indicator
 * @param disabled - Disables the textarea
 * @param rows - Number of visible text lines
 * @param maxLength - Maximum character limit
 * @param showCount - Shows character count
 */
const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  rows = 4,
  maxLength,
  showCount = false,
  className,
  style,
}) => {
  return (
    <div className={className} style={style}>
      <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
        {label}
        {required && <span style={{ color: '#ff4d4f', marginLeft: 4 }}>*</span>}
      </label>
      <AntTextArea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        rows={rows}
        maxLength={maxLength}
        showCount={showCount}
      />
    </div>
  );
};

export default TextArea;