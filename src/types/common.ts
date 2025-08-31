// Shared type definitions used across components

export type ComponentChildren = React.ReactNode;

export type BaseComponentProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: ComponentChildren;
};

export type SelectOption = {
  label: string;
  value: string;
};

export type CrudRecord = {
  id: string;
  name: string;
  category: string;
  description?: string;
  createdAt: Date;
};

export type FormData = {
  name: string;
  category: string;
  description?: string;
};

export type ButtonVariant = 'primary' | 'default' | 'danger' | 'text';
