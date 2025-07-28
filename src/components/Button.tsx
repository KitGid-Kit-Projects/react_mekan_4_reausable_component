// Import React core library
import React from 'react';

// Import Ant Design's Button component and alias as AntButton
import { Button as AntButton } from 'antd';

// Import shared types, including BaseComponentProps (className, style, etc.)
// and ButtonVariant (e.g., 'primary' | 'secondary')
import { BaseComponentProps, ButtonVariant } from '../types/common';

// Define the props interface for this reusable Button component
interface ButtonProps extends BaseComponentProps {
  text: string;                 // Text displayed inside the button
  onClick?: () => void;         // Optional click handler function when button is clicked
  variant?: ButtonVariant;      // Button style variant, e.g., 'primary' or 'secondary'
  loading?: boolean;            // Shows a loading spinner on the button if true
  disabled?: boolean;           // Disables the button if true (unclickable)
  htmlType?: 'button' | 'submit' | 'reset'; // HTML native button types
}

/**
 * Reusable Button component built on top of Ant Design's Button
 * 
 * Props:
 * - text: Text content inside the button
 * - onClick: Function to execute on button click
 * - variant: Controls the button style variant (primary or secondary)
 * - loading: Shows a spinner and disables button during async ops
 * - disabled: Disables the button to prevent interaction
 * - htmlType: Native HTML button type attribute ('button', 'submit', 'reset')
 * - className: Optional CSS class for styling
 * - style: Optional inline style for custom styling
 */
const Button: React.FC<ButtonProps> = ({
  text,                 // Button label text
  onClick,              // Click event handler function
  variant = 'secondary',// Default variant is 'secondary'
  loading = false,      // Default loading state is false (no spinner)
  disabled = false,     // Default enabled (not disabled)
  htmlType = 'button',  // Default HTML button type is 'button'
  className,            // Optional className for styling wrapper
  style,                // Optional inline styles
}) => {
  // Function that maps our custom variant prop to Ant Design button types
  const getButtonType = (): 'primary' | 'default' => {
    switch (variant) {
      case 'primary':
        return 'primary'; // Ant Design primary button style
      case 'secondary':
      default:
        return 'default'; // Ant Design default (secondary) button style
    }
  };

  return (
    // Render Ant Design Button with props and styles applied
    <AntButton
      type={getButtonType()}   // Set button type based on variant mapping
      onClick={onClick}        // Attach click event handler
      loading={loading}        // Show spinner when loading is true
      disabled={disabled}      // Disable button if disabled is true
      htmlType={htmlType}      // Set native HTML button type attribute
      className={className}    // Pass custom CSS class
      style={style}            // Pass inline styles
    >
      {text}                   {/* Display button text */}
    </AntButton>
  );
};

// Export the component so it can be imported and used elsewhere
export default Button;
