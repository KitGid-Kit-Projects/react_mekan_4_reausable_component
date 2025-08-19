# Component Relation Diagram (CRD)

App.tsx (# './src/App.tsx')
├── [ConfigProvider] (# 'antd')
           └── CrudExample (# './src/pages/CrudExample.tsx')
               ├── [Row] (# 'antd')
               │   └── [Col] (# 'antd')
               │       └── CreateUpdateCrudExample (# './src/components/crud-example/CreateUpdateCrudExample.tsx')
               │            ├── Card (# './src/components/Card.tsx')
               │                ├── BaseComponentProps (# './src/types/BaseComponentProps.ts')
               │                ├── ComponentChildren (# './src/types/ComponentChildren.ts')
               │                   ├── Input {Name} (# './src/components/Input.tsx')
               │                   │   ├── BaseComponentProps (# './src/types/BaseComponentProps.ts')
               │                   ├── SelectBox {Category} (# './src/components/SelectBox.tsx')
               │                   │   ├── BaseComponentProps (# './src/types/BaseComponentProps.ts')
               │                   │   ├── SelectOption (# './src/types/SelectOption.ts')
               │                   └── TextArea {Description} (# './src/components/TextArea.tsx')
               │                       ├── BaseComponentProps (# './src/types/BaseComponentProps.ts')
               └── useCrudExample (# './src/hooks/crudExample/useCrudExample.tsx')
                 



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
- `{Description}` = UI element purpose/content