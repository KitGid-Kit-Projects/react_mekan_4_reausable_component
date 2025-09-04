import React from 'react'; // - React core library for component creation
import { Input } from 'antd'; // - Ant Design Input module containing TextArea subcomponent

// Destructure Ant Design's TextArea component
const { TextArea: AntTextArea } = Input; // - Extract TextArea from Input module and rename to avoid naming conflicts

 
/**
 * Enhanced TextArea Component
 * 
 * A reusable multi-line text input built on Ant Design with:
 * - Custom label support
 * - Required field indication
 * - Character counting
 * - Size and length controls
 * - Full accessibility support
 * 
 * @param props - Configuration options for the textarea
 */
const TextArea: React.FC<any> = ({
  label,          // The text label shown above the textarea
  placeholder,    // Hint text when empty
  value,          // Current text content
  onChange,       // Handler for text changes
  required = false, // Default to not show required indicator
  disabled = false, // Default to enabled state
  rows = 4,       // Default visible rows
  maxLength,      // Optional character limit
  showCount = false, // Default to hide character counter
  className,      // Optional CSS class for container
  style,          // Optional inline styles for container
}) => { // - Functional component with destructured props and default values for optional parameters
  return (
    // Container div for the textarea component
    <div className={className} style={style}> {/* - Wrapper div that accepts custom styling and CSS classes from parent */}
      {/* Label with optional required indicator */}
      <label style={{ 
        display: 'block', 
        marginBottom: 8, 
        fontWeight: 500 
      }}> {/* - Label element with consistent styling for all form fields */}
        {label} {/* - Display the label text passed from parent component */}
        {/* Red asterisk for required fields */}
        {required && (
          <span style={{ color: '#ff4d4f', marginLeft: 4 }}>*</span>
        )} {/* - Conditionally render red asterisk indicator for required fields */}
      </label>
      
      {/* Ant Design TextArea component with all configured props */}
      <AntTextArea
        // Placeholder text when empty
        placeholder={placeholder} // - Hint text displayed when textarea is empty to guide user input
        
        // Current text value
        value={value} // - Controlled component value from parent state, ensures single source of truth
        
        // Handler called on text changes
        // Receives the React change event
        onChange={onChange} // - Callback function called on every keystroke, passes event to parent handler
        
        // Disables interaction when true
        disabled={disabled} // - Controls whether user can interact with textarea (useful for read-only states)
        
        // Visible number of text lines
        rows={rows} // - Sets initial height of textarea by defining visible rows (4 rows default)
        
        // Maximum allowed characters
        maxLength={maxLength} // - Optional character limit to prevent overly long input, undefined allows unlimited
        
        // Shows character counter when true
        showCount={showCount} // - Displays current/max character count below textarea for user feedback
        
        // Additional Ant Design TextArea props could be added here:
        // autoSize - for dynamic height
        // allowClear - to show clear button
        // etc.
      /> {/* - Ant Design TextArea with all accessibility features and styling built-in */}
    </div>
  );
};

export default TextArea; // - Export component as default for use in forms and other parent components