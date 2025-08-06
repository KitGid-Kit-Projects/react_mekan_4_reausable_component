<App>
└── <ConfigProvider> (from Ant Design)
   └── <div> (Layout Container)
       ├── <header>
       │   ├── <h1> — Page Title
       │   └── <p> — Description
       └── <main>
           └── <CrudExample /> (Component)
                   └── Uses: useCrudExample() Hook
                       └── formData = useState({ name }) // Manages input data
                       └── handleInputChange(field) => (e) => {
                           setFormData(prev => ({ ...prev, [field]: e.target.value }))
                       }  // Handles field-level input changes
                   └── Renders:
                       └── <Input
                           label="Name"
                           value={formData.name}
                           onChange={handleInputChange('name')}
                           />
