import { createSlice } from "@reduxjs/toolkit";

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: [],
    totalAmount: 0,
    unpaidAmount: 0,
    paidAmount:0,
    
  },
  reducers: {
    addInvoice: (state, action) => {
      const { amount, paid } = action.payload;

      // Add the invoice to the list
      state.invoices.push(action.payload);

      // Update totalAmount
      state.totalAmount += amount;

      // Update unpaidAmount and paidAmount based on the 'paid' status
      if (paid) {
        state.paidAmount += amount;
      } else {
        state.unpaidAmount += amount;
      }
    },
  
      
  },
});

export const { addInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
