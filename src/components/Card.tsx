import React from 'react';
import { Card as AntCard } from 'antd';
import { BaseComponentProps, ComponentChildren } from '../types/common';

// Using interface for component props
interface CardProps extends BaseComponentProps {
  title: string;
  children: ComponentChildren;
  footer?: ComponentChildren;
  hoverable?: boolean;
  loading?: boolean;
}

/**
 * Reusable Card component built on top of Ant Design
 * 
 * @param title - Card header title
 * @param children - Card content (any React node)
 * @param footer - Optional footer content
 * @param hoverable - Enables hover effect
 * @param loading - Shows loading skeleton
 */
const Card: React.FC<CardProps> = ({
  title,
  children,
  footer,
  hoverable = false,
  loading = false,
  className,
  style,
}) => {
  return (
    <AntCard
      title={title}
      hoverable={hoverable}
      loading={loading}
      className={className}
      style={style}
      actions={footer ? [footer] : undefined}
    >
      {children}
    </AntCard>
  );
};

export default Card;