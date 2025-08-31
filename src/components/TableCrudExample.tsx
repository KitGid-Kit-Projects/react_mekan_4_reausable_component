import React from 'react'
import Card from './Card.tsx'
import Table from './Table.tsx'

// Component: TableCrudExample
// Renders a Card-wrapped Table and optional empty state
export default function TableCrudExample({
  columns, /* column definitions passed from hook/page */
  records, /* array of data rows */
    
}) {
  return (
    <Card title="Records" style={{ height: 'fit-content' }}>
    <Table
    columns={columns} /* columns: defines table columns */
    data={records} /* data: rows to display */
    pagination={records.length > 10} /* enable pagination when more than 10 rows */
    size="middle" /* table size */
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
