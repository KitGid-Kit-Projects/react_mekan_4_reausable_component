import React from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles
import CrudExample from './pages/CrudExample';

/**
 * Main App component
 * 
 * This example demonstrates:
 * ✅ TypeScript with React
 * ✅ Component-based architecture with Ant Design
 * ✅ Reusable UI components with proper typing
 * ✅ Simple CRUD operations (Create, Read, Update, Delete)
 * ✅ Form validation and state management
 * ✅ When to use interface vs type (see components for examples)
 * ✅ Default props with TypeScript
 * ✅ Generic components (Table component accepts any data type)
 */
const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
          borderRadius: 6,
        },
      }}
    >
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        <header style={{ 
          background: '#fff', 
          padding: '16px 24px', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '24px'
        }}>
          <h1 style={{ margin: 0, color: '#1890ff' }}>
            React + TypeScript + Ant Design Component Library
          </h1>
          <p style={{ margin: '8px 0 0 0', color: '#666' }}>
            Demonstrating reusable components, proper TypeScript usage, and CRUD operations
          </p>
        </header>
        
        <main>
          <CrudExample />
        </main>
      </div>
    </ConfigProvider>
  );
};

export default App;