// Presentational, reusable text input built on Ant Design.
// Provides a labeled, controlled input with optional required/disabled states.
import React from 'react';
// Import Ant Design's Input component and alias it to avoid name collision.
import { Input as AntInput } from 'antd';
// Common component props (className, style) shared across UI components.
import type { BaseComponentProps } from '../../types/BaseComponentProps';
 
// Define the props interface for the Input component
// Extends BaseComponentProps which includes className and style
interface InputProps extends BaseComponentProps {
  // Text label shown above the input.
  label: string;
  // Hint text shown inside the input when empty.
  placeholder?: string;
  // Controlled value of the input. The parent owns the state.
  value: string;
  // Callback invoked on every input change with the native event.
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // If true, shows a visual required indicator next to the label.
  required?: boolean;
  // If true, makes the input non-interactive.
  disabled?: boolean;
  // Native input type. Defaults to 'text'.
  type?: 'text' | 'email' | 'password' | 'number';
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
  onChange,
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
        onChange={onChange}        // Change handler
        disabled={disabled}       // Disabled state
        type={type}               // Input type
        // Note: AntInput automatically handles accessibility attributes
  // For full accessible labeling, consider passing an id and linking
  // label htmlFor to that id; this component keeps it minimal.
      />
    </div>
  );
};

export default Input;