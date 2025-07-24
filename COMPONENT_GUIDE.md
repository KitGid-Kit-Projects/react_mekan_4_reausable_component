# React + TypeScript + Ant Design Component Library Guide

## 📘 TypeScript Best Practices Demonstrated

### When to use `interface` vs `type`

#### Use `interface` for:
- **Component props** (extensible, clear intent)
- **Object shapes that might be extended**
- **API contracts**

```typescript
// ✅ Good: Component props
interface ButtonProps extends BaseComponentProps {
  text: string;
  onClick?: () => void;
  variant?: ButtonVariant;
}

// ✅ Good: Extensible object shapes
interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
}
```

#### Use `type` for:
- **Union types**
- **Computed types**
- **Simple aliases**

```typescript
// ✅ Good: Union types
type ButtonVariant = 'primary' | 'secondary';

// ✅ Good: Computed types
type FormData = Record<string, any>;

// ✅ Good: Function types
type ChangeHandler = (value: string) => void;
```

### Default Props in TypeScript

We use **destructuring with default values** (modern approach):

```typescript
const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'secondary', // ✅ Default prop
  loading = false,       // ✅ Default prop
  disabled = false,      // ✅ Default prop
  // ...rest
}) => {
  // Component logic
};
```

### Generic Components

Our `Table` component demonstrates generic programming:

```typescript
// ✅ Generic function component
function Table<T extends Record<string, any>>({
  columns,
  data,
  // ...props
}: TableProps<T>) {
  // Works with any data type that extends Record<string, any>
}

// Usage:
<Table<UserData> columns={userColumns} data={users} />
<Table<ProductData> columns={productColumns} data={products} />
```

## 🧱 Component Architecture

### 1. Composition with Children

```typescript
// ✅ Card accepts any React content
interface CardProps {
  title: string;
  children: React.ReactNode; // Flexible content
  footer?: React.ReactNode;  // Optional footer
}

// Usage:
<Card title="User Profile" footer={<SaveButton />}>
  <UserForm />
  <UserAvatar />
</Card>
```

### 2. Render Props Pattern

```typescript
// Example: Flexible table action rendering
interface TableProps<T> {
  data: T[];
  renderActions?: (record: T) => React.ReactNode;
}

// Usage:
<Table 
  data={users}
  renderActions={(user) => (
    <div>
      <EditButton onClick={() => edit(user)} />
      <DeleteButton onClick={() => delete(user)} />
    </div>
  )}
/>
```

### 3. Controlled Components

All form components are **controlled**:

```typescript
const [value, setValue] = useState('');

<Input 
  value={value}                    // ✅ Controlled
  onChange={(e) => setValue(e.target.value)}
/>
```

## 🎨 Design System Integration

### Ant Design Wrapper Pattern

Each component wraps Ant Design while providing:
- **Consistent API**
- **Custom defaults**
- **Additional functionality**

```typescript
const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  // Map custom variants to Ant Design types
  const getButtonType = (): 'primary' | 'default' => {
    switch (variant) {
      case 'primary': return 'primary';
      case 'secondary': 
      default: return 'default';
    }
  };

  return <AntButton type={getButtonType()} {...props} />;
};
```

## 🔄 CRUD Pattern Implementation

The `CrudExample` component demonstrates:

### State Management
```typescript
const [records, setRecords] = useState<CrudRecord[]>([]);
const [formData, setFormData] = useState({ name: '', category: '', description: '' });
const [editingRecord, setEditingRecord] = useState<CrudRecord | null>(null);
```

### Form Handling
```typescript
const handleSubmit = async () => {
  // Validation
  if (!formData.name.trim()) {
    message.error('Name is required');
    return;
  }

  // Update or create
  if (editingRecord) {
    setRecords(prev => prev.map(record => 
      record.id === editingRecord.id ? { ...record, ...formData } : record
    ));
  } else {
    const newRecord = { id: Date.now().toString(), ...formData, createdAt: new Date() };
    setRecords(prev => [...prev, newRecord]);
  }
};
```

### Table Actions
```typescript
<Table
  data={records}
  onEdit={handleEdit}      // Built-in edit action
  onDelete={handleDelete}  // Built-in delete action
  actions={[               // Custom actions
    { key: 'view', label: 'View', onClick: handleView },
    { key: 'export', label: 'Export', onClick: handleExport }
  ]}
/>
```

## 📖 Storybook Integration

Each component has comprehensive stories:

```typescript
// Interactive controls
export const WithControls: Story = {
  args: {
    text: 'Click me',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
  },
};
```

## 🚀 Usage Examples

### Creating a Form
```typescript
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', message: ''
  });

  return (
    <Card title="Contact Us">
      <Input
        label="Name"
        value={formData.name}
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        required
      />
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        required
      />
      <TextArea
        label="Message"
        value={formData.message}
        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        rows={4}
      />
      <Button text="Send Message" variant="primary" onClick={handleSubmit} />
    </Card>
  );
};
```

### Creating a Data Table
```typescript
const UserTable = ({ users }: { users: User[] }) => {
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
  ];

  return (
    <Table
      columns={columns}
      data={users}
      onEdit={handleEditUser}
      onDelete={handleDeleteUser}
      pagination={users.length > 10}
    />
  );
};
```

## 🎯 Key Benefits

1. **Type Safety**: Full TypeScript coverage prevents runtime errors
2. **Reusability**: Components work across different contexts
3. **Consistency**: Unified API and design language
4. **Maintainability**: Clear separation of concerns
5. **Developer Experience**: Great IntelliSense and error messages
6. **Documentation**: Storybook provides interactive component docs

## 🏗️ File Organization

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   └── index.ts        # Barrel exports
├── features/           # Feature-specific components
│   └── CrudExample.tsx
├── types/              # Shared type definitions
│   └── common.ts
└── stories/            # Storybook stories
    ├── Button.stories.tsx
    └── ...
```

This architecture scales well for larger applications while maintaining code quality and developer productivity.