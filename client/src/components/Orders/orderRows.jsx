import React from "react";
import { TableRow, TableCell } from "@mui/material";

function OrderRow({ order }) {
  return (
    <TableRow>
      <TableCell>{order.orderId}</TableCell>
      <TableCell>{order.date}</TableCell>
      <TableCell>{order.customer}</TableCell>

      <TableCell>{order.destination}</TableCell>
      <TableCell>{order.products}</TableCell>
      <TableCell>{order.amount}</TableCell>
      <TableCell>{order.status}</TableCell>
    </TableRow>
  );
}

export default OrderRow;
