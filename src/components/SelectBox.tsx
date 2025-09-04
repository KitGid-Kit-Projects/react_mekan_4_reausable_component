import React from 'react'; // - React core library for component creation
import { Select } from 'antd'; // - Ant Design Select component for dropdown functionality


/**
 * Enhanced Select Dropdown Component
 * 
 * A reusable select input built on Ant Design's Select component with:
 * - Custom label support
 * - Required field indication
 * - Type-safe options
 * - Full control over selection state
 * 
 * @param props - Configuration options for the select box
 */
const SelectBox: React.FC<any> = ({
  label,          // The text label shown above the select
  options,        // Array of {label, value} objects for dropdown
  value,          // Currently selected value (controlled)
  handleSelectChange,       // Handler when selection changes (receives new value)
  placeholder = 'Please select...', // Default placeholder text
  required = false, // Default to not show required indicator
  disabled = false, // Default to enabled state
  allowClear = true, // Default to showing clear button
  className,      // Optional CSS class for the container
  style,          // Optional inline styles for the container
}) => { // - Functional component with destructured props and default values for optional parameters
  return (
    // Container div for the select component
    <div className={className} style={style}> {/* Wrapper div that accepts custom styling and CSS classes from parent */}
      {/* Label with optional required indicator */}
      <label style={{ 
        display: 'block', 
        marginBottom: 8, 
        fontWeight: 500 
      }}>  
        {label} {/* Display the label text passed from parent component */}
        {/* Red asterisk for required fields */}
        {required && (
          <span style={{ color: '#ff4d4f', marginLeft: 4 }}>*</span>
        )} {/* Conditionally render red asterisk indicator for required fields */}
      </label>
      
      {/* Ant Design Select component with all configured props */}
      <Select
        // Current selected value (undefined clears the selection)
        value={value || undefined} // - Controlled component value from parent state, undefined clears selection
        
        // Handler called when selection changes
        // Receives the new value string
        onChange={handleSelectChange} // - Callback function called when user selects option, passes selected value to parent
        
        // Placeholder text when nothing is selected
        placeholder={placeholder} // - Hint text displayed when no option is selected to guide user
        
        // Disables interaction when true
        disabled={disabled} // - Controls whether user can interact with dropdown (useful for read-only states)
        
        // Shows X button to clear selection when true
        allowClear={allowClear} // - Enables clear button (X) that allows user to deselect current option
        
        // Ensures select fills its container
        style={{ width: '100%' }} // - Makes select component fill full width of container for responsive design
        
        // The selectable options
        // Each option must have label (display text) and value
        options={options} // - Array of option objects with {label, value} structure for dropdown items
        
        // Additional Ant Design Select props could be added here:
        // showSearch - enables search filtering
        // mode - for multiple selection
        // etc.
      />  
    </div>
  );
};

export default SelectBox; // - Export component as default for use in forms and other parent components