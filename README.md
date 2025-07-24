# React + TypeScript + Ant Design Component Library

A complete, production-ready React project built with TypeScript and Ant Design, demonstrating best practices for reusable component development and CRUD operations.

## 🚀 Features

- **Modern React + TypeScript** - Full type safety and excellent developer experience
- **Ant Design Integration** - Professional UI components with custom wrappers
- **Reusable Component Library** - Well-typed, flexible components
- **CRUD Functionality** - Complete create, read, update, delete operations
- **Storybook Documentation** - Interactive component documentation
- **Best Practices** - Demonstrates proper TypeScript patterns and component architecture

## 🧱 Component Library

### Core Components

- **Button** - Customizable button with variants and loading states
- **Card** - Flexible container with header and footer support
- **Input** - Controlled text input with validation indicators
- **SelectBox** - Dropdown selection with search and clear functionality
- **TextArea** - Multi-line text input with character counting
- **Table** - Generic data table with sorting, filtering, and actions

All components are:
- ✅ Fully typed with TypeScript
- ✅ Built on Ant Design for consistency
- ✅ Customizable with props and variants
- ✅ Documented with Storybook

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── SelectBox.tsx
│   ├── TextArea.tsx
│   ├── Table.tsx
│   └── index.ts        # Barrel exports
├── features/           # Feature components
│   └── CrudExample.tsx # Complete CRUD demo
├── types/              # TypeScript definitions
│   └── common.ts
├── stories/            # Storybook stories
│   ├── Button.stories.tsx
│   ├── Card.stories.tsx
│   └── ...
└── App.tsx             # Main application
```

## 🎯 TypeScript Best Practices

### Interface vs Type Usage

```typescript
// ✅ Use interface for component props (extensible)
interface ButtonProps extends BaseComponentProps {
  text: string;
  onClick?: () => void;
  variant?: ButtonVariant;
}

// ✅ Use type for unions and aliases
type ButtonVariant = 'primary' | 'secondary';
type FormData = Record<string, any>;
```

### Default Props

```typescript
const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'secondary', // Default using destructuring
  loading = false,
  // ...
}) => {
  // Component implementation
};
```

### Generic Components

```typescript
// Generic table component
function Table<T extends Record<string, any>>({
  columns,
  data,
}: TableProps<T>) {
  // Works with any data type
}

// Usage with specific types
<Table<UserData> columns={userColumns} data={users} />
```

## 🔄 CRUD Implementation

The project includes a complete CRUD example demonstrating:

- **Form Management** - Controlled inputs with validation
- **State Management** - In-memory data operations
- **Table Operations** - Sorting, filtering, and pagination
- **User Feedback** - Toast notifications for actions
- **Edit/Delete Actions** - Inline table operations

### Key Features:
- Create new records with form validation
- Display records in a sortable, filterable table
- Edit existing records inline
- Delete records with confirmation
- Real-time updates and user feedback

## 📖 Storybook Documentation

Interactive component documentation with:
- **Controls** - Live prop editing
- **Actions** - Event logging
- **Documentation** - Usage examples and API docs
- **Accessibility** - A11y testing and guidelines

### Run Storybook:
```bash
npm run storybook
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd react-typescript-antd-components

# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook
```

### Development

```bash
# Development server
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Component Usage Examples

### Basic Form
```typescript
<Card title="User Registration">
  <Input
    label="Full Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
  />
  <SelectBox
    label="Department"
    options={departmentOptions}
    value={department}
    onChange={setDepartment}
    required
  />
  <Button
    text="Register User"
    variant="primary"
    onClick={handleSubmit}
    loading={isSubmitting}
  />
</Card>
```

### Data Table
```typescript
<Table
  columns={columns}
  data={records}
  onEdit={handleEdit}
  onDelete={handleDelete}
  pagination={true}
  size="middle"
/>
```

## 🏗️ Architecture Decisions

### Component Design Principles

1. **Composition over Inheritance** - Components accept children and render props
2. **Controlled Components** - All form inputs are controlled for predictable state
3. **Generic Programming** - Table and other components work with any data type
4. **Separation of Concerns** - UI components separate from business logic
5. **Consistent API** - Similar prop patterns across all components

### TypeScript Patterns

1. **Strict Typing** - No `any` types in component interfaces
2. **Generic Constraints** - Proper bounds for generic type parameters
3. **Discriminated Unions** - Type-safe variant handling
4. **Utility Types** - Leverage TypeScript's built-in utility types
5. **Barrel Exports** - Clean import structure

## 🧪 Testing

Components are designed to be easily testable:
- Pure functions for business logic
- Controlled components with predictable state
- Clear separation of concerns
- Storybook for visual regression testing

## 🔧 Customization

### Extending Components

```typescript
// Extend base components
interface CustomButtonProps extends ButtonProps {
  icon?: React.ReactNode;
  tooltip?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  tooltip,
  ...buttonProps
}) => {
  const button = <Button {...buttonProps} />;
  
  return tooltip ? (
    <Tooltip title={tooltip}>{button}</Tooltip>
  ) : button;
};
```

### Theme Customization

```typescript
// App.tsx - Configure Ant Design theme
<ConfigProvider
  theme={{
    token: {
      colorPrimary: '#1890ff',
      borderRadius: 6,
    },
  }}
>
  <App />
</ConfigProvider>
```

## 📚 Learning Resources

- [Component Guide](./COMPONENT_GUIDE.md) - Detailed implementation guide
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Official TypeScript docs
- [Ant Design Components](https://ant.design/components/overview/) - Component reference
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) - Community guide

## 🤝 Contributing

1. Follow the established TypeScript patterns
2. Add Storybook stories for new components
3. Include proper type definitions
4. Write clear documentation
5. Test components thoroughly

## 📝 License

MIT License - feel free to use this project as a foundation for your own applications.

---

**Built with ❤️ using React, TypeScript, and Ant Design**