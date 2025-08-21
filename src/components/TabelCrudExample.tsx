import React from 'react'
import Card from './Card'
import Table from './Table'

export default function TabelCrudExample({
    columns,
    records,
    handleEdit,
    handleDelete
    
}) {
  return (
    <Card title="Records" style={{ height: 'fit-content' }}>
    <Table
      columns={columns}
      data={records}
      onEdit={handleEdit}
      onDelete={handleDelete}
      pagination={records.length > 10}
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
