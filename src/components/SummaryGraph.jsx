//import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";

const SummaryGraph = () => {
  const { totalAmount, unpaidAmount ,paidAmount} = useSelector((state) => state.invoice);

  // Fallback values for undefined or null amounts
  const formattedTotalAmount = totalAmount ? totalAmount : 0;
  const formattedUnpaidAmount = unpaidAmount ? unpaidAmount : 0;
  const formattedPaidAmount = paidAmount ? paidAmount : 0;


  return (
    <Row>
      <Col xs={12} sm={6} md={4}>
        <Card style={{
          border: "1px solid grey",
          borderRadius:"4px",}}className="shadow-sm" body>
          <h5 className="text-center text-primary">
            <u>Total Invoice Amount</u>
          </h5>
          <p className="text-center" style={{ fontSize: "1.5rem" }}>
            ₹{formattedTotalAmount.toLocaleString("en-IN")}
          </p>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card style={{
          border: "1px solid grey",
          borderRadius:"4px",}}className="shadow-sm"body>
          <h5 className="text-center text-danger ">
            <u>Unpaid Amount</u>
          </h5>
          <p className="text-center" style={{ fontSize: "1.5rem" }}>
            ₹{formattedUnpaidAmount.toLocaleString("en-IN")}
          </p>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4}>
        <Card style={{
          border: "1px solid grey",
          borderRadius:"4px",}} className="shadow-sm" body>
          <h5 className="text-center text-success">
            <u>Paid Amount</u>
          </h5>
          <p className="text-center" style={{ fontSize: "1.5rem" }}>
            ₹{formattedPaidAmount.toLocaleString("en-IN")}
          </p>
        </Card>
      </Col>
    </Row>
  );
};

export default SummaryGraph;
