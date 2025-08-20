import React from 'react';
import { Table as AntTable, Button as AntButton, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';

// Using generic interface for flexible data types


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
function Table<T extends Record<string, any>>({
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
}: any) {
  // Create action column if edit/delete handlers or custom actions are provided
  const actionColumn: ColumnsType<T>[0] | null = (onEdit || onDelete || actions) ? {
    title: 'Actions',
    key: 'actions',
    width: 150,
    render: (_, record) => (
      <Space size="small">
        {onEdit && (
          <AntButton 
            type="primary" 
            size="small" 
            onClick={() => onEdit(record)}
          >
            Edit
          </AntButton>
        )}
        {onDelete && (
          <AntButton 
            type="primary" 
            danger 
            size="small" 
            onClick={() => onDelete(record)}
          >
            Delete
          </AntButton>
        )}
        {actions && actions.map((action) => (
          <AntButton
            key={action.key}
            type={action.type || 'default'}
            danger={action.danger}
            size="small"
            onClick={() => action.onClick(record)}
          >
            {action.label}
          </AntButton>
        ))}
      </Space>
    ),
  } : null;

  // Combine columns with action column
  const finalColumns = actionColumn ? [...columns, actionColumn] : columns;

  return (
    <AntTable
      columns={finalColumns}
      dataSource={data}
      loading={loading}
      pagination={pagination ? { pageSize: 10, showSizeChanger: true } : false}
      size={size}
      className={className}
      style={style}
      rowKey={(record) => record.id || Math.random().toString()}
    />
  );
}

export default Table;