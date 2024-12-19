//import React from "react";
import { useSelector } from "react-redux";
import { Table, Card } from "react-bootstrap";

const InvoiceList = () => {
  const invoices = useSelector((state) => state.invoice.invoices);

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Client</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{invoice.client}</td>
                <td>₹{invoice.amount}</td>
                <td>{invoice.paid ? "Paid" : "Unpaid"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default InvoiceList;
