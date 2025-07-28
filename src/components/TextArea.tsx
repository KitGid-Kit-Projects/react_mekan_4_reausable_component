// Import React core library
import React from 'react';

// Import Input component from Ant Design
// Destructure TextArea from Input and alias as AntTextArea
import { Input } from 'antd';
const { TextArea: AntTextArea } = Input;

// Import shared base component props (className, style, etc.)
import { BaseComponentProps } from '../types/common';

// Define the props interface for the TextArea component
interface TextAreaProps extends BaseComponentProps {
  label: string; // Label text shown above the textarea
  placeholder?: string; // Optional placeholder text inside the textarea
  value: string; // Controlled textarea value (from parent state)
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // Event handler for text changes
  required?: boolean; // If true, shows a red asterisk next to the label
  disabled?: boolean; // If true, disables the textarea (non-editable)
  rows?: number; // Number of visible text lines (height of textarea)
  maxLength?: number; // Maximum number of characters allowed
  showCount?: boolean; // Shows character count below the textarea if true
}

/**
 * Reusable TextArea component built on top of Ant Design's TextArea
 * 
 * Props:
 * - label: The label text displayed above the textarea
 * - placeholder: Optional hint text inside the textarea when empty
 * - value: Controlled value of the textarea (should be managed by parent)
 * - onChange: Function called when textarea value changes (typing)
 * - required: If true, displays a red asterisk indicating the field is required
 * - disabled: If true, disables the textarea input
 * - rows: Number of visible rows (height)
 * - maxLength: Maximum allowed characters in the textarea
 * - showCount: If true, shows the current character count below the textarea
 * - className: Optional CSS class for the container div
 * - style: Optional inline styles for the container div
 */
const TextArea: React.FC<TextAreaProps> = ({
  label,          // Label text shown above the textarea
  placeholder,    // Optional placeholder text
  value,          // Current value of the textarea (controlled)
  onChange,       // Function to handle changes to textarea content
  required = false,  // Default is false, show asterisk only if true
  disabled = false,  // Default is false, textarea is enabled by default
  rows = 4,          // Default number of visible lines to 4
  maxLength,         // Optional maximum length of characters allowed
  showCount = false, // Default is false, disables character count display
  className,         // Optional custom className for container div
  style,             // Optional inline styles for container div
}) => {
  return (
    // Wrapper div allows styling with className and style props
    <div className={className} style={style}>
      
      {/* Label element for textarea, styled as block with bottom margin */}
      <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
        {label}
        {/* Show red asterisk if required is true */}
        {required && <span style={{ color: '#ff4d4f', marginLeft: 4 }}>*</span>}
      </label>
      
      {/* Ant Design TextArea component with passed props */}
      <AntTextArea
        placeholder={placeholder} // Show placeholder inside textarea if given
        value={value}             // Controlled value from parent state
        onChange={onChange}       // Call handler on text change
        disabled={disabled}       // Disable textarea if true
        rows={rows}               // Number of visible rows (textarea height)
        maxLength={maxLength}     // Maximum number of allowed characters
        showCount={showCount}     // Show character count if true
      />
    </div>
  );
};

// Export the component for reuse in other parts of the app
export default TextArea;
