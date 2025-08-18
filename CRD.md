# Component Relation Diagram (CRD)

**React App Structure - Starting from App.tsx**

```
App.tsx (# './src/App.tsx')
├── [React] (# 'react')
├── [ConfigProvider] (# 'antd')
│   └── CrudExample (# './src/pages/CrudExample.tsx')
│       ├── [React] (# 'react')
│       ├── [Row] (# 'antd')
│       ├── [Col] (# 'antd')
│       ├── useCrudExample (# './src/hooks/crudExample/useCrudExample.tsx')
│       │   ├── [useState] (# 'react')
│       │   ├── [useCallback] (# 'react')
│       │   ├── SelectOption (# './src/types/common.ts')
│       │   └── FormData (# './src/types/common.ts')
│       └── CreateUpdateCrudExample (# './src/components/crud-example/CreateUpdateCrudExample.tsx')
│           ├── [React] (# 'react')
│           └── Card (# './src/components/Card.tsx')
│               ├── [React] (# 'react')
│               ├── BaseComponentProps (# './src/types/common.ts')
│               ├── ComponentChildren (# './src/types/common.ts')
│               └── div (# native HTML container)
│                   ├── Input (# './src/components/Input.tsx')
│                   │   ├── [React] (# 'react')
│                   │   ├── BaseComponentProps (# './src/types/common.ts')
│                   │   └── [input] (# native HTML element)
│                   ├── SelectBox (# './src/components/SelectBox.tsx')
│                   │   ├── [React] (# 'react')
│                   │   ├── BaseComponentProps (# './src/types/common.ts')
│                   │   ├── SelectOption (# './src/types/common.ts')
│                   │   └── [select] (# native HTML element)
│                   ├── TextArea (# './src/components/TextArea.tsx')
│                   │   ├── [React] (# 'react')
│                   │   ├── BaseComponentProps (# './src/types/common.ts')
│                   │   └── [textarea] (# native HTML element)
│                   └── Button (# './src/components/Button.tsx')
│                       ├── [React] (# 'react')
│                       ├── BaseComponentProps (# './src/types/common.ts')
│                       ├── ButtonVariant (# './src/types/common.ts')
│                       └── [button] (# native HTML element)
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
└── TextArea (# './src/components/TextArea.tsx')
```

## Legend

- `└──` ➝ Nested JSX usage
- `└──⧉` ➝ Modal/Popup triggered
- `└──≫` ➝ Redirect/Navigation
- `[ComponentName]` = Library components
- `ComponentName` = Developer components
