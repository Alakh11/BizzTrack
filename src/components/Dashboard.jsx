//import React from "react";
<script src="http://localhost:8097"></script>
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import SummaryGraph from "./SummaryGraph";
import InvoiceList from "./InvoiceList";
import InvoiceForm from "./InvoiceForm";

const Dashboard = () => {
  return (
    <Container className="transparent-Container mt-5">
      <Row className="mb-4">
        <Col>
          <h3 className="text-center text-primary">Invoices</h3>
        </Col>
        <Col className="text-end">
          <Button variant="success" className="shadow-lg">
            + Create Invoice
          </Button>
        </Col>
      </Row>
      <SummaryGraph />
      <Row className="mt-4">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <InvoiceList />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <InvoiceForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
