// Import React to enable JSX usage and React types
import React from 'react';
// Import Ant Design's Input component; aliased as AntInput to avoid name clashes
import { Input as AntInput } from 'antd';
// Import a shared base props interface (e.g., className, style) from your types
import type { BaseComponentProps } from '../types/common';

// Define the props interface for this reusable Input component
// It extends BaseComponentProps so consumers can pass className/style
interface InputProps extends BaseComponentProps {
  label: string; // Visible label text shown above the input (required)
  placeholder?: string; // Hint shown when the input is empty (optional)
  value: string; // Controlled value for the input field
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change handler for controlled updates
  required?: boolean; // If true, show required indicator next to the label
  disabled?: boolean; // If true, the input is non-interactive
  type?: 'text' | 'email' | 'password' | 'number'; // HTML input type, defaults to 'text'
}

/**
 * Reusable Input component built atop Ant Design's Input.
 * Implements the controlled component pattern with type-safe props.
 * Accepts className/style via BaseComponentProps for easy styling overrides.
 */
const Input: React.FC<InputProps> = ({
  label,            // Human-readable field name displayed above the control
  placeholder,      // Placeholder text inside the input
  value,            // Current controlled value
  onChange,         // Callback for input change events
  required = false, // Default false: field not required unless specified
  disabled = false, // Default false: field enabled by default
  type = 'text',    // Default input type is "text"
  className,        // Optional CSS class applied to the wrapper div
  style,            // Optional inline styles applied to the wrapper div
}) => {
  return (
    // Wrapper container allows margin, layout, and custom styles
    <div className={className} style={style}>
      {/* Top label describing the input. Using block display for full-width line. */}
      <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
        {label}
        {/* If the field is required, display a red asterisk for visual indication */}
        {required && <span style={{ color: '#ff4d4f', marginLeft: 4 }}>*</span>}
      </label>

      {/* Ant Design input control using the controlled component pattern */}
      <AntInput
        placeholder={placeholder} // Visual hint inside the input when empty
        value={value}             // Controlled value bound to parent state
        onChange={onChange}       // Propagate changes to parent via callback
        disabled={disabled}       // Disable interaction when true
        type={type}               // Input type (text/email/password/number)
        // Note: AntInput sets appropriate accessibility attributes internally.
        // If needed, pass `id` and match it with label's htmlFor for explicit association.
      />
    </div>
  );
};

// Export as default so consumers can import without braces
export default Input;
