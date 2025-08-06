App (📦 './App.tsx')
└── [ConfigProvider] (📦 'antd')
    └── div (📦 native HTML container)
        ├── header (📦 native HTML)
        │   ├── h1 (📦 native HTML)
        │   └── p (📦 native HTML)
        └── main (📦 native HTML)
            └── CrudExample (📦 './pages/CrudExample.tsx')
                ├── Uses Hook: useCrudExample (📦 '@/hooks/crudExample/useCrudExample.ts')
                │   ├── formData (object) — holds current form field values
                │   ├── setFormData (function) — setter for form data
                │   ├── records (array) — list of saved records
                │   ├── setRecords (function) — setter for records
                │   ├── editingRecord (object|null) — currently edited record
                │   ├── setEditingRecord (function)
                │   ├── isSubmitting (boolean) — loading state during submit
                │   ├── setIsSubmitting (function)
                │   ├── categoryOptions (array) — select dropdown options
                │   ├── handleInputChange(field) (function) — input/textarea change handler
                │   ├── handleSelectChange (function) — select dropdown change handler
                │   ├── handleSubmit (function) — submit/create or update handler
                │   └── handleCancelEdit (function) — cancels editing mode
                └── CreateUpdateCrudExample (📦 '@/components/crud-example/CreateUpdateCrudExample.tsx')
                    ├── [Card] (📦 'antd')
                    ├── Button (📦 '../components/Button.tsx')
                    ├── Input (📦 '../components/Input.tsx')
                    │   └── [input] (📦 native HTML)
                    ├── SelectBox (📦 '../components/SelectBox.tsx')
                    │   └── [select] (📦 native HTML)
                    └── TextArea (📦 '../components/TextArea.tsx')
                        └── [textarea] (📦 native HTML)
                    ├── Props passed:
                    │   ├── formData
                    │   ├── categoryOptions
                    │   ├── handleInputChange
                    │   ├── handleSelectChange
                    │   ├── handleSubmit
                    │   ├── handleCancelEdit
                    │   ├── isSubmitting
                    │   └── editingRecord
