App (📦 './App.tsx')
└── [ConfigProvider] (📦 'antd')
    └── div (📦 native HTML container)
        ├── header (📦 native HTML)
        │   ├── h1 (📦 native HTML)
        │   └── p (📦 native HTML)
        └── main (📦 native HTML)
            └── CrudExample (📦 './pages/CrudExample.tsx')
                ├── Uses: useCrudExample() (📦 '@/hooks/crudExample/useCrudExample')
                │   ├── formData, setFormData (🧠 useState)
                │   ├── records, setRecords (🧠 useState)
                │   ├── editingRecord, setEditingRecord (🧠 useState)
                │   ├── isSubmitting, setIsSubmitting (🧠 useState)
                │   ├── categoryOptions (📊 Select options)
                │   ├── handleInputChange(field) (🔧 Input/TextArea handler)
                │   ├── handleSelectChange (🔧 SelectBox handler)
                │   ├── handleSubmit (🔧 Create/Update action)
                │   ├── handleCancelEdit (🔧 Cancel editing)
                │   ├── handleEdit (🔧 Triggers edit mode)
                │   ├── handleDelete (🔧 Deletes a record)
                │   └── columns (📋 Table column definitions)
                └── Layout: <Row gutter>
                    ├── Col (xs=24, lg=8)
                    │   └── CreateUpdateCrudExample (📦 '@/components/crud-example/CreateUpdateCrudExample.tsx')
                    │       └── Card (📦 '../components/Card.tsx')
                    │           └── Form Controls:
                    │               ├── Input (label="Name")
                    │               ├── SelectBox (label="Category")
                    │               └── TextArea (label="Description")
                    │           └── Footer Buttons:
                    │               ├── Cancel (if editing)
                    │               └── Create / Update (loading={isSubmitting})
                    └── Col (xs=24, lg=16)
                        └── TabelCrudExample (📦 '@/components/crud-example/TabelCrudExample.tsx')
                            └── Card (📦 '../components/Card.tsx')
                                └── Table (📦 '../components/Table.tsx')
                                    ├── Props:
                                    │   ├── columns
                                    │   ├── data = records
                                    │   ├── onEdit(record)
                                    │   ├── onDelete(record.id)
                                    │   ├── pagination (enabled if records.length > 10)
                                    │   └── size = "middle"
                                └── If no records:
                                    └── Empty state message: "No records found..."
