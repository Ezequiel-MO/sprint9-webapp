import { TableCell } from "@mui/material";
import { accounting } from "accounting";

const TransferCells = ({ pax, options, cat, description }) => {
  return (
    <>
      <TableCell>{cat || description}</TableCell>
      <TableCell>{`${options[0].vehicleCapacity} seater Bus`}</TableCell>
      <TableCell>{pax}</TableCell>
      <TableCell>
        {accounting.formatMoney(options[0].transfer_in_out, "€")}
      </TableCell>
      <TableCell>
        {accounting.formatMoney(pax * options[0].transfer_in_out, "€")}
      </TableCell>
    </>
  );
};

export default TransferCells;
