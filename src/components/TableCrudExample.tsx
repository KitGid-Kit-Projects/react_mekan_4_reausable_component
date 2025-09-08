import React from 'react'
import Card from './Card.tsx'
import Table from './Table.tsx'

// Component: TableCrudExample
// Renders a Card-wrapped Table and optional empty state
export default function TableCrudExample({
  columns, /* column definitions passed from hook/page */
  records, /* array of data rows */
            handleEdit,
    handleDelete
}) {
  return (
    <Card title="Records" style={{ height: 'fit-content' }}>
    <Table
      columns={columns} // - Pass column definitions for table structure and behavior
        data={records} // - Pass records array as data source for table rows
        handleEdit={handleEdit} // - Pass edit handler to Table for Edit button functionality
        handleDelete={handleDelete} // - Pass delete handler to Table for Delete button functionality
        pagination={records.length > 10} // - Enable pagination only when more than 10 records for better UX
        size="middle" 
    />
    {/* Empty state message */}
    {records.length === 0 && (
      <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
        No records found. Create your first record using the form.
      </div>
    )}
  </Card>
  )
}
