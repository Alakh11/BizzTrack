import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addInvoice } from "../redux/invoiceSlice";
import { Form, Button } from "react-bootstrap";

const InvoiceForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(
      addInvoice({
        client: data.client,
        amount: Number(data.amount),
        paid: data.status === "paid",
      })
    );
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Client Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Client Name"
          {...register("client", { required: true })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Invoice Amount"
          {...register("amount", { required: true })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select {...register("status", { required: true })}>
          <option value="unpaid">Unpaid</option>
          <option value="paid">Paid</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Invoice
      </Button>
    </Form>
  );
};

export default InvoiceForm;
