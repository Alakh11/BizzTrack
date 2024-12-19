import { createSlice } from "@reduxjs/toolkit";

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: [],
    totalAmount: 0,
    unpaidAmount: 0,
  },
  reducers: {
    addInvoice: (state, action) => {
      state.invoices.push(action.payload);
      state.totalAmount += action.payload.amount;
      state.unpaidAmount += action.payload.paid ? 0 : action.payload.amount;
    },
  },
});

export const { addInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
