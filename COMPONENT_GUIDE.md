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
                │                           // 🔹 Manages create/edit flows
                ├── useCrudExample          // 📦 Imported from '@/hooks/crudExample/useCrudExample'
                │   │                       // 🔹 Manages all form state and logic
                │   │                       // 🔸 Handles: formData, records, editing state
                │   └── hooks/crudExample/  // 📦 Directory: @/hooks/crudExample/
                │       └── useCrudExample  // 🔹 Contains 10+ state handlers
                │
                └── <Row> (antd)            // 📦 Imported from 'antd'
                    │                       // 🔹 Responsive grid container
                    └── <Col> (antd)       // 📦 Imported from 'antd'
                        │                   // 🔸 Form column (xs:24, lg:8)
                        └── <Card> (antd)   // 📦 Imported from 'antd'
                            │               // 🔹 Form container with title/footer
                            ├── Card Title  // 🔸 Dynamic (Create/Edit mode)
                            │
                            ├── Form Components
                            │   ├── Input          // 📦 Imported from '../components/Input'
                            │   │   └── (Ant Design Input)
                            │   │
                            │   ├── SelectBox       // 📦 Imported from '../components/SelectBox'
                            │   │   └── (Ant Design Select)
                            │   │   └── SelectOption// 📦 Imported from '../types/common'
                            │   │
                            │   └── TextArea        // 📦 Imported from '../components/TextArea'
                            │       └── (Ant Design Input.TextArea)
                            │
                            └── Card Footer
                                ├── Button (Cancel) // 📦 Imported from '../components/Button'
                                │
                                └── Button (Submit) // 📦 Imported from '../components/Button'
                                

