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