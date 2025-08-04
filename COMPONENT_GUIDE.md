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
                │                           // 🔸 Demo component for CRUD operations
                │                           // 🔹 Shows form input handling
                ├── useCrudExample          // 📦 Imported from '@/hooks/crudExample/useCrudExample'
                │   │                       // 🔹 Custom hook for form state
                │   └── hooks/crudExample/  // 📦 Directory: @/hooks/crudExample/
                │       └── useCrudExample  // 🔸 Manages formData and handlers
                │
                └── <Card> (antd)           // 📦 Imported from 'antd'
                    │                       // 🔹 Container for form elements
                    │                       // 🔸 Provides consistent styling
                    └── Form Components     // 🔹 Group of reusable form inputs
                        ├── Input          // 📦 Imported from '../components/Input'
                        │   └── (Ant Design Input)  // 🔸 Underlying AntD input
                        │
                        ├── SelectBox       // 📦 Imported from '../components/SelectBox'
                        │   │               // 🔹 Custom select/dropdown component
                        │   └── (Ant Design Select) // 🔸 Uses AntD Select internally
                        │   └── SelectOption// 📦 Imported from '../types/common'
                        │                   // 🔹 Type definition for options
                        │
                        └── TextArea        // 📦 Imported from '../components/TextArea'
                            └── (Ant Design Input.TextArea)
                                            // 🔸 Multiline text input with counters
