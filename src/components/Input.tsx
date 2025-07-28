// Import core React functionality to use JSX and React types
import React from 'react';

// Import Ant Design's Input component
// Aliased as AntInput to avoid naming conflict with our custom Input component
import { Input as AntInput } from 'antd';

// Import base component props that allow optional styling like className and style
import { BaseComponentProps } from '../types/common';

// Define the props (inputs) this component accepts using TypeScript interface
interface InputProps extends BaseComponentProps {
  label: string; // The label text that appears above the input
  placeholder?: string; // Optional placeholder text shown inside the input box when empty
  value: string; // The current value of the input (controlled component)
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle input value change events
  required?: boolean; // Whether this field is required; shows a red asterisk if true
  disabled?: boolean; // Whether the input is disabled (non-editable)
  type?: 'text' | 'email' | 'password' | 'number'; // Defines the HTML input type
}

/**
 * Reusable Input component built on top of Ant Design's Input
 * 
 * Props:
 * - label: The field's label displayed above the input
 * - placeholder: Optional text inside the input as a hint
 * - value: The current input value (controlled input pattern)
 * - onChange: Event handler to update the input's value in the parent component
 * - required: If true, displays a red asterisk next to the label
 * - disabled: If true, disables the input (grays out and non-editable)
 * - type: Specifies the type of input (e.g. text, email, number)
 * - className: Optional CSS class for the outer container
 * - style: Optional inline style for the outer container
 */
const Input: React.FC<InputProps> = ({
  label,         // Required label shown above the input
  placeholder,   // Optional placeholder text inside the input
  value,         // The current value of the input passed from the parent
  onChange,      // Function that handles the change event (e.g., typing)
  required = false,  // Optional; default is false. If true, shows an asterisk
  disabled = false,  // Optional; default is false. If true, disables the input
  type = 'text',     // Optional; default is 'text'. Defines the input type
  className,     // Optional CSS class for custom styling of the wrapper
  style,         // Optional inline styles for the wrapper
}) => {
  return (
    // Wrapper div: applies optional className and style
    <div className={className} style={style}>
      
      {/* Label: shown above the input. Block-level element with bottom margin */}
      <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
        {label}
        
        {/* If the input is required, show a red asterisk next to the label */}
        {required && <span style={{ color: '#ff4d4f', marginLeft: 4 }}>*</span>}
      </label>

      {/* Ant Design Input component */}
      <AntInput
        placeholder={placeholder} // Placeholder inside the input
        value={value}             // Input value (controlled component pattern)
        onChange={onChange}       // Triggers when user types or edits the input
        disabled={disabled}       // Disables the input if true
        type={type}               // Sets the input type: text, email, etc.
      />
    </div>
  );
};

// Export the component so it can be reused elsewhere in your app
export default Input;
