# Component Relation Diagram (CRD)

App.tsx (# './src/App.tsx')
├── [ConfigProvider] (# 'antd')
│           └── CrudExample (# './src/pages/CrudExample.tsx')
│               ├── [Row] {Layout Container} (# 'antd')
│               │   ├── [Col] {Form Column} (# 'antd')
│               │   │   └── CreateUpdateCrudExample (# './src/components/crud-example/CreateUpdateCrudExample.tsx')
│               │   │       └── Card {Form Card Container} (# './src/components/Card.tsx')
│               │   │           ├── BaseComponentProps (# './src/types/common.ts')
│               │   │           ├── ComponentChildren (# './src/types/common.ts')
│               │   │           ├── Input {Product Name Field} (# './src/components/Input.tsx')
│               │   │           │   ├── BaseComponentProps (# './src/types/common.ts')
│               │   │           ├── SelectBox {Category Dropdown} (# './src/components/SelectBox.tsx')
│               │   │           │   ├── BaseComponentProps (# './src/types/common.ts')
│               │   │           │   └── SelectOption (# './src/types/common.ts')
│               │   │           ├── TextArea {Product Description Field} (# './src/components/TextArea.tsx')
│               │   │           │   ├── BaseComponentProps (# './src/types/common.ts')
│               │   │           └── footer {Card Footer Actions} (# card footer section)
│               │   │               ├── Button {Cancel Button} (# './src/components/Button.tsx')
│               │   │               │   ├── BaseComponentProps (# './src/types/common.ts')
│               │   │               │   ├── ButtonVariant (# './src/types/common.ts')
│               │   │               └── Button {Create/Update Button} (# './src/components/Button.tsx')
│               │   │                   ├── BaseComponentProps (# './src/types/common.ts')
│               │   │                   ├── ButtonVariant (# './src/types/common.ts')
│               │   └── [Col] {Table Column} (# 'antd')
│               │       └── TabelCrudExample (# './src/components/crud-example/TabelCrudExample.tsx')
│               │           └── Card {Table Card Container} (# './src/components/Card.tsx')
│               │               ├── BaseComponentProps (# './src/types/common.ts')
│               │               ├── ComponentChildren (# './src/types/common.ts')
│               │               └── Table {CRUD Data Table} (# './src/components/Table.tsx')
│               │                   │      ├── [th] {Name Column} (# native HTML element)
│               │                   │      ├── [th] {Category Column} (# native HTML element)
│               │                   │      ├── [th] {Description Column} (# native HTML element)
│               │                   │      ├── [th] {Created At Column} (# native HTML element)
│               │                   │      └── [th] {Actions Column} (# native HTML element)
│               │                   │                ├── [AntButton] {Edit Record} (# 'antd')
│               │                   │                ├── [AntButton] {Delete Record} (# 'antd')
│               │                   │                └── [AntButton] {Custom Actions} (# 'antd')
│               │                   ├── [Space] (# 'antd')
│               │                   ├── BaseComponentProps (# './src/types/common.ts')
│               └── useCrudExample (# './src/hooks/crudExample/useCrudExample.tsx')
│                   ├── [useState] (# 'react')
│                   ├── [useCallback] (# 'react')
│                   ├── SelectOption (# './src/types/common.ts')
│                   ├── CrudRecord (# './src/types/common.ts')
│                   └── FormData (# './src/types/common.ts')
```

## Type Definitions

```
types/common.ts (# './src/types/common.ts')
├── BaseComponentProps (# interface)
├── SelectOption (# interface)
├── TableAction (# interface)
├── CrudRecord (# interface)
├── ButtonVariant (# type)
├── ComponentChildren (# type)
└── FormData (# type)
```

## Component Exports

```
components/index.ts (# './src/components/index.ts')
├── Input (# './src/components/Input.tsx')
├── Card (# './src/components/Card.tsx')
├── Button (# './src/components/Button.tsx')
├── SelectBox (# './src/components/SelectBox.tsx')
├── TextArea (# './src/components/TextArea.tsx')
└── Table (# './src/components/Table.tsx')
```

## Legend

- `└──` ➝ Nested JSX usage
- `└──⧉` ➝ Modal/Popup triggered
- `└──≫` ➝ Redirect/Navigation
- `[ComponentName]` = Library components
- `ComponentName` = Developer components
- `{Description}` = UI element purpose/content (only after component names)