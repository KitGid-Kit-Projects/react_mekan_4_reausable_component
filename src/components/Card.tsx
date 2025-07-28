import React from 'react';
import { Card as AntCard } from 'antd';
import { BaseComponentProps, ComponentChildren } from '../types/common';

// Define the props interface for the Card component
// Extends BaseComponentProps which includes className and style
interface CardProps extends BaseComponentProps {
  title: string;                // Title text displayed in the card header (required)
  children: ComponentChildren;  // Main content of the card (React nodes)
  footer?: ComponentChildren;   // Optional footer content (React nodes)
  hoverable?: boolean;          // Whether to show hover effect (default: false)
  loading?: boolean;            // Whether to show loading skeleton (default: false)
}

/**
 * Reusable Card component built on top of Ant Design
 * 
 * Features:
 * - Configurable title and content sections
 * - Optional footer section
 * - Hover effects and loading states
 * - Type-safe props with TypeScript
 * - Consistent styling through className and style props
 * 
 * @param title - Text displayed in the card header
 * @param children - Main content of the card (can be any valid React node)
 * @param footer - Optional content shown in the footer area
 * @param hoverable - Enables visual hover effect when true
 * @param loading - Shows loading skeleton animation when true
 * @param className - Optional CSS class for custom styling
 * @param style - Optional inline styles
 */
const Card: React.FC<CardProps> = ({
  title,
  children,
  footer,
  hoverable = false,  // Default value if not provided
  loading = false,    // Default value if not provided
  className,
  style,
}) => {
  return (
    // Ant Design Card component with all configured props
    <AntCard
      title={title}             // Card header title
      hoverable={hoverable}     // Toggle hover effect
      loading={loading}         // Toggle loading state
      className={className}     // Custom CSS class
      style={style}             // Inline styles
      actions={footer ? [footer] : undefined}  // Footer content (wrapped in array)
    >
      {children}  {/* Main card content */}
    </AntCard>
  );
};

export default Card;