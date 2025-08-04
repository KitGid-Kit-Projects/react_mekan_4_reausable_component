App.tsx                                     // 📦 File: ./App.tsx
│                                           // 🔸 Root component of the application
│                                           // 🔹 Sets up global theme and basic layout
└── ConfigProvider                          // 📦 Imported from 'antd'
    │                                       // 🔸 Provides Ant Design theme configuration
    │                                       // 🔹 Customizes colors, borders, etc.
    └── Main Layout                         // 🔹 Wrapper div with min-height: 100vh
        │                                   // 🔸 Contains header and main content
        │                                   // 🔹 Applies light gray background
        ├── Header                          // 🔹 Static header section
        │   │                               // 🔸 Contains app title and description
        │   └── h1                          // 🔹 Main title with primary color
        │   └── p                          // 🔸 Subtitle with gray color
        │
        └── Main Content                    // 🔹 Container for primary content
            └── CrudExample                // 📦 Imported from './page/CrudExample'
                │                           // 🔸 Example CRUD interface component
                │                           // 🔹 Demonstrates form handling
                ├── useCrudExample          // 📦 Imported from '@/hooks/crudExample/useCrudExample'
                │   │                       // 🔸 Custom hook for CRUD operations
                │   └── hooks/crudExample/   // 📦 Directory: @/hooks/crudExample/
                │       └── useCrudExample   // 🔹 Manages form state and handlers
                │
                └── Input                   // 📦 Imported from '../components/Input'
                                            // 🔸 Reusable input component
                                            // 🔹 Handles form input rendering

