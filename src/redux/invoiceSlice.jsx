import { createSlice } from "@reduxjs/toolkit";

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: [],
    totalAmount: 0,
    unpaidAmount: 0,
  },
  reducers: {
    // Add a new invoice
    addInvoice: (state, action) => {
      state.invoices.push(action.payload);
      state.totalAmount += action.payload.amount;
      // If the invoice is unpaid, add it to unpaidAmount
      state.unpaidAmount += action.payload.paid ? 0 : action.payload.amount;
    },
    // Update an existing invoice
    updateInvoice: (state, action) => {
      const { id, paid } = action.payload;
      const invoice = state.invoices.find((invoice) => invoice.id === id);
      if (invoice) {
        const previousPaidStatus = invoice.paid;
        invoice.paid = paid;
        // If status has changed from unpaid to paid, update the unpaidAmount
        if (previousPaidStatus !== paid) {
          state.unpaidAmount += paid ? -invoice.amount : invoice.amount;
        }
      }
    },
    // Remove an invoice
    removeInvoice: (state, action) => {
      const id = action.payload;
      const invoiceIndex = state.invoices.findIndex((invoice) => invoice.id === id);
      if (invoiceIndex !== -1) {
        const invoiceToRemove = state.invoices.splice(invoiceIndex, 1)[0];
        state.totalAmount -= invoiceToRemove.amount;
        // Adjust unpaidAmount if the removed invoice was unpaid
        if (!invoiceToRemove.paid) {
          state.unpaidAmount -= invoiceToRemove.amount;
        }
      }
    },
  },
});

export const { addInvoice, updateInvoice, removeInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
