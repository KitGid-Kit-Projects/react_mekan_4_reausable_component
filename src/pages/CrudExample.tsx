// Import the React runtime and types to enable JSX and React.FC typing
import React from 'react';
// Import Ant Design's Grid components for responsive layout
import { Row, Col } from 'antd';

/**
 * CrudExample (STEP-2)
 * Layout-only scaffold that matches the CRD for STEP-2:
 * - A single Row with two Cols (8/24 and 16/24 on large screens).
 * - Left column is a placeholder for the form.
 * - Right column is a placeholder for the table.
 */
const CrudExample: React.FC = () => {
  // Functional component body begins; returns JSX
  return (
    // Outer container to constrain width, center content, and add breathing room
    <div
      style={{
        padding: 24,          // 24px inner spacing
        maxWidth: 1200,       // limit line length / content width
        margin: '0 auto',     // center horizontally
      }}
    >
      {/* Grid row: 24px horizontal & vertical gutters between columns */}
      <Row gutter={[24, 24]}>
        {/* LEFT COLUMN — Form section (placeholder) */}
        {/* xs=24 => full width on extra-small screens; lg=8 => 8/24 (~33%) on large screens */}
        <Col xs={24} lg={8}>
          {/* Section heading with zero margin to keep tight spacing */}
          <h2 style={{ margin: 0 }}>Form Section</h2>
          {/* Brief note about what will go here later (inputs, validation, etc.) */}
          <p style={{ marginTop: 8 }}>Inputs and validation will be added here.</p>
        </Col>

        {/* RIGHT COLUMN — Table section (placeholder) */}
        {/* xs=24 => full width on small screens; lg=16 => 16/24 (~67%) on large screens */}
        <Col xs={24} lg={16}>
          {/* Section heading mirrors the left column for visual consistency */}
          <h2 style={{ margin: 0 }}>Table Section</h2>
          {/* Placeholder text indicating where the data grid and actions will live */}
          <p style={{ marginTop: 8 }}>Data table and actions will be rendered here.</p>
        </Col>
      </Row>
    </div>
  );
};

// Default export so other modules can import without named braces
export default CrudExample;
