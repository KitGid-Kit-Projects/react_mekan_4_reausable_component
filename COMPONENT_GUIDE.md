App.tsx                                     // 📦 File: ./App.tsx
│                                           // 🔸 Root component with global providers
│                                           // 🔹 Sets Ant Design theme and base layout
└── ConfigProvider (antd)                   // 📦 Imported from 'antd'
    │                                       // 🔸 Provides design system configuration
    │                                       // 🔹 Customizes theme tokens (colors, radii)
    └── <div> (Main Layout Wrapper)         // 🔹 min-height: 100vh, bg: #f5f5f5
        ├── <header>                        // 🔸 App header with shadow
        │   ├── <h1>                        // 🔹 Primary title (#1890ff)
        │   └── <p>                         // 🔸 Subtitle (#666)
        │
        └── <main>                         // 🔹 Primary content container
            └── CrudExample                 // 📦 Imported from './page/CrudExample'
                │                           // 🔸 Complete CRUD operations demo
                │                           // 🔹 Manages create/read/update/delete flows
                ├── useCrudExample          // 📦 Imported from '@/hooks/crudExample/useCrudExample'
                │   │                       // 🔹 Central state management
                │   │                       // 🔸 Handles all CRUD operations
                │   └── hooks/crudExample/  // 📦 Directory: @/hooks/crudExample/
                │       └── useCrudExample  // 🔹 15+ state handlers and methods
                │
                └── <Row> (antd)            // 📦 Imported from 'antd'
                    │                       // 🔹 Responsive grid (24 columns)
                    │                       // 🔸 gutter: [24,24] for spacing
                    ├── <Col> (Form Column) // 📦 Imported from 'antd'
                    │   │                   // 🔸 xs:24, lg:8 (responsive width)
                    │   └── <Card> (Form Card) // 📦 Imported from 'antd'
                    │       │               // 🔹 Form container
                    │       ├── Card Title  // 🔸 Dynamic (Create/Edit mode)
                    │       │
                    │       ├── Form Components
                    │       │   ├── Input          // 📦 Imported from '../components/Input'
                    │       │   │   └── (Ant Design Input)
                    │       │   │
                    │       │   ├── SelectBox       // 📦 Imported from '../components/SelectBox'
                    │       │   │   └── (Ant Design Select)
                    │       │   │   └── SelectOption// 📦 Imported from '../types/common'
                    │       │   │
                    │       │   └── TextArea        // 📦 Imported from '../components/TextArea'
                    │       │       └── (Ant Design Input.TextArea)
                    │       │
                    │       └── Card Footer
                    │           ├── Button (Cancel) // 📦 Imported from '../components/Button'
                    │           │   └── variant="secondary"
                    │           │
                    │           └── Button (Submit) // 📦 Imported from '../components/Button'
                    │               └── variant="primary"
                    │
                    └── <Col> (Table Column) // 📦 Imported from 'antd'
                        │                   // 🔸 xs:24, lg:16 (responsive width)
                        └── <Card> (Table Card) // 📦 Imported from 'antd'
                            │               // 🔹 Records display container
                            ├── Table       // 📦 Imported from '../components/Table'
                            │   │           // 🔹 Displays all CRUD records
                            │   ├── Columns // 📦 Defined in useCrudExample
                            │   │           // 🔸 Custom column configurations
                            │   ├── Actions // 🔹 Edit/Delete buttons
                            │   │   ├── handleEdit
                            │   │   └── handleDelete
                            │   │
                            │   └── Pagination // 🔸 Auto-enabled when >10 records

