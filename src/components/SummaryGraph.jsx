//import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";

const SummaryGraph = () => {
  const { totalAmount, unpaidAmount } = useSelector((state) => state.invoice);

  return (
    <Row className="mt-4">
      <Col xs={12} sm={6} md={4}>
        <Card className="shadow-sm">
          <Card.Body>
            <h5 className="text-center text-primary">
              <u>Total Invoice Amount</u>
            </h5>
            <p className="text-center" style={{ fontSize: "1.5rem" }}>
              ₹{totalAmount.toLocaleString("en-IN")}
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card className="shadow-sm">
          <Card.Body>
            <h5 className="text-center text-danger">
              <u>Unpaid Amount</u>
            </h5>
            <p className="text-center" style={{ fontSize: "1.5rem" }}>
              ₹{unpaidAmount.toLocaleString("en-IN")}
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SummaryGraph;