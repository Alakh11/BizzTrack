//import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
<script src="http://192.168.1.11:8097"></script>
const InvoiceList = () => {
  const invoices = useSelector((state) => state.invoice.invoices);

  return (
    <Table striped bordered hover>
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
  );
};

export default InvoiceList;
