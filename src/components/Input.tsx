import React from 'react';
import { Input as AntInput } from 'antd';
import { BaseComponentProps } from '../types/common';

// Define the props interface for the Input component
// Extends BaseComponentProps which includes className and style
interface InputProps extends BaseComponentProps {
  label: string;               // Text label for the input field (required)
  placeholder?: string;        // Placeholder text (optional)
  value: string;               // Current value of the input (controlled component)
  required?: boolean;          // Whether to show required indicator (default: false)
  disabled?: boolean;          // Whether the input is disabled (default: false)
  type?: 'text' | 'email' | 'password' | 'number'; // HTML input type (default: 'text')
}

/**
 * Reusable Input component built on top of Ant Design
 * 
 * Features:
 * - Customizable label with required indicator
 * - Controlled component pattern
 * - Type-safe props with TypeScript
 * - Extensible styling through className and style props
 * 
 * @param label - Input field label (display text above the input)
 * @param placeholder - Hint text shown when input is empty
 * @param value - Current value of the input (controlled component)
 * @param onChange - Callback when input value changes
 * @param required - Shows red asterisk if true
 * @param disabled - Makes input non-interactive if true
 * @param type - Determines input type (text/email/password/number)
 * @param className - Optional CSS class for styling
 * @param style - Optional inline styles
 */
const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  // onChange,
  required = false,    // Default value if not provided
  disabled = false,    // Default value if not provided
  type = 'text',       // Default value if not provided
  className,
  style,
}) => {
  return (
    // Container div that accepts custom className and style
    <div className={className} style={style}>
      {/* Label with required indicator */}
      <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
        {label}
        {/* Show red asterisk if required */}
        {required && <span style={{ color: '#ff4d4f', marginLeft: 4 }}>*</span>}
      </label>
      
      {/* Ant Design Input component */}
      <AntInput
        placeholder={placeholder}  // Placeholder text
        value={value}              // Controlled value
        // onChange={onChange}        // Change handler
        disabled={disabled}       // Disabled state
        type={type}               // Input type
        // Note: AntInput automatically handles accessibility attributes
      />
    </div>
  );
};

export default Input;