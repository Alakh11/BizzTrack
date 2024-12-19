import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";



const SummaryGraph = () => {
  const { totalAmount, unpaidAmount } = useSelector((state) => state.invoice);

  return (
    <Row>
      <Col>
  <Card body>
          <h5><u>Total Invoice Amount</u></h5>
          <p>₹{totalAmount}</p>
        </Card>
      </Col>
      <Col>
  <Card body>
  
          <h5><u>Unpaid Amount</u></h5>
          <p>₹{unpaidAmount}</p>
        </Card>
      </Col>
    </Row>
  );
};

export default SummaryGraph;
