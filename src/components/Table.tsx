import React from 'react';
import { Table as AntTable, Button, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { TableProps as AntTableProps } from 'antd';

// Define types for custom actions
interface TableAction<T> {
  key: string;
  label: string;
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
  danger?: boolean;
  onClick: (record: T) => void;
}

// Define the props interface with proper generics
interface TableProps<T> {
  columns: ColumnsType<T>;
  data: T[];
  loading?: boolean;
  pagination?: boolean | AntTableProps<T>['pagination'];
  size?: 'small' | 'middle' | 'large';
  actions?: TableAction<T>[];
  onEdit?: (record: T) => void;
  onDelete?: (record: T) => void;
  className?: string;
  style?: React.CSSProperties;
  rowKey?: keyof T | ((record: T) => React.Key);
}

/**
 * Reusable Table component built on top of Ant Design
 * Generic component that accepts any data type
 * 
 * @param columns - Table column definitions
 * @param data - Array of data objects to display
 * @param loading - Shows loading state
 * @param pagination - Enables pagination
 * @param size - Table size variant
 * @param actions - Custom action buttons for each row
 * @param onEdit - Edit handler function
 * @param onDelete - Delete handler function
 */
function Table<T extends object = any>({
  columns,
  data,
  loading = false,
  pagination = true,
  size = 'middle',
  actions,
  onEdit,
  onDelete,
  className,
  style,
  rowKey,
}: TableProps<T>) {
  
  // Create action column if edit/delete handlers or custom actions are provided
  const actionColumn: ColumnsType<T>[number] | null = 
    (onEdit || onDelete || actions) ? {
      title: 'Actions',
      key: 'actions',
      width: 150,
      fixed: 'right' as const,
      render: (_, record: T) => (
        <Space size="small">
          {onEdit && (
            <Button 
              type="primary" 
              size="small" 
              onClick={() => onEdit(record)}
            >
              Edit
            </Button>
          )}
          {onDelete && (
            <Button 
              type="primary" 
              danger 
              size="small" 
              onClick={() => onDelete(record)}
            >
              Delete
            </Button>
          )}
          {actions && actions.map((action) => (
            <Button
              key={action.key}
              type={action.type || 'default'}
              danger={action.danger}
              size="small"
              onClick={() => action.onClick(record)}
            >
              {action.label}
            </Button>
          ))}
        </Space>
      ),
    } : null;

  // Combine columns with action column
  const finalColumns = actionColumn ? [...columns, actionColumn] : columns;

  // Handle rowKey generation
  const getRowKey = (record: T): React.Key => {
    if (rowKey) {
      if (typeof rowKey === 'function') {
        return rowKey(record);
      }
      return record[rowKey] as React.Key;
    }
    
    // Fallback to random key if no rowKey provided
    return Math.random().toString();
  };

  return (
    <AntTable
      columns={finalColumns}
      dataSource={data}
      loading={loading}
      pagination={pagination === true ? { 
        pageSize: 10, 
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
      } : pagination}
      size={size}
      className={className}
      style={style}
      rowKey={getRowKey}
      scroll={{ x: true }}
    />
  );
}

export default Table;