import React from 'react';
import { Button as AntButton } from 'antd';
import { BaseComponentProps, ButtonVariant } from '../types/common';

// Using interface for component props (recommended for component props)
interface ButtonProps extends BaseComponentProps {
  text: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
}

/**
 * Reusable Button component built on top of Ant Design
 * 
 * @param text - Button text content
 * @param onClick - Click handler function
 * @param variant - Button style variant ('primary' | 'secondary')
 * @param loading - Shows loading spinner when true
 * @param disabled - Disables the button when true
 * @param htmlType - HTML button type attribute
 */
const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'secondary', // Default prop using destructuring
  loading = false,
  disabled = false,
  htmlType = 'button',
  className,
  style,
}) => {
  // Map our custom variants to Ant Design button types
  const getButtonType = (): 'primary' | 'default' => {
    switch (variant) {
      case 'primary':
        return 'primary';
      case 'secondary':
      default:
        return 'default';
    }
  };

  return (
    <AntButton
      type={getButtonType()}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      htmlType={htmlType}
      className={className}
      style={style}
    >
      {text}
    </AntButton>
  );
};

export default Button;