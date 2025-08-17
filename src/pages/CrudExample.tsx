import React from 'react';
import { Row, Col } from 'antd';

/**
 * CrudExample (STEP-2)
 * Layout only: Row with two Cols (8 / 16).
 * Left = Form placeholder; Right = Table placeholder.
 * Matches CRD for STEP-2.
 */
const CrudExample: React.FC = () => {
  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: '0 auto' }}>
      <Row gutter={[24, 24]}>
        {/* Form Section (placeholder) */}
        <Col xs={24} lg={8}>
          <h2 style={{ margin: 0 }}>Form Section</h2>
          <p style={{ marginTop: 8 }}>Inputs and validation will be added here.</p>
        </Col>

        {/* Table Section (placeholder) */}
        <Col xs={24} lg={16}>
          <h2 style={{ margin: 0 }}>Table Section</h2>
          <p style={{ marginTop: 8 }}>Data table and actions will be rendered here.</p>
        </Col>
      </Row>
    </div>
  );
};

export default CrudExample;
