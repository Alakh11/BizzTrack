import React from "react";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import SummaryGraph from "./SummaryGraph";
import InvoiceList from "./InvoiceList";
import InvoiceForm from "./InvoiceForm";

const Dashboard = () => {
  return (
    <>
      {/* Navbar Menu */}
      <Navbar style={{backgroundColor:"purple"}} variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">BizzTrack</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#summary">Portfolio</Nav.Link>
              <Nav.Link href="#invoices">Invoices</Nav.Link>
              <Nav.Link href="#create-invoice">Contact US</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#logout">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
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
    </>
  );
};

export default Dashboard;
