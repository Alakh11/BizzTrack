//import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SummaryGraph from "./SummaryGraph";
import InvoiceList from "./InvoiceList";
import InvoiceForm from "./InvoiceForm";

const Dashboard = () => {
  return (
    <Container className="transparent-Container">
      <Row className="mt-4 mb-3">
        <Col>
          <h3>Invoices</h3>
        </Col>
        <Col className="text-end">
          <Button variant="danger">+ Create Invoice</Button>
        </Col>
      </Row>
      <SummaryGraph />
      <Row className="mt-4">
        <Col>
          <InvoiceList />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <InvoiceForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
