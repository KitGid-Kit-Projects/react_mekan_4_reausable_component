// Common types used across the application

export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface TableAction {
  key: string;
  label: string;
  onClick: (record: any) => void;
  type?: 'primary' | 'danger' | 'default';
}

export interface CrudRecord {
  id: string;
  name: string;
  category: string;
  description: string;
  createdAt: Date;
}

// Generic types for components
export type ButtonVariant = 'primary' | 'secondary';

// Helper type for component children
export type ComponentChildren = React.ReactNode;

// Generic form data type
export type FormData = Record<string, any>;