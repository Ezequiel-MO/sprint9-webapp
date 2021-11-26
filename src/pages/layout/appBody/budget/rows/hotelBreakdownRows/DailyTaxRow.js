import { TableCell, TableRow } from "@mui/material";
import accounting from "accounting";

const DailyTaxRow = ({ selectedHotel, nights }) => {
  return (
    <TableRow>
      <TableCell component='th' scope='row'>
        City Tax
      </TableCell>
      <TableCell>
        {selectedHotel.DUInr + selectedHotel.DoubleRoomNr * 2}
      </TableCell>
      <TableCell>{nights}</TableCell>
      <TableCell>
        {accounting.formatMoney(selectedHotel.DailyTax, "€")}
      </TableCell>
      <TableCell>
        {accounting.formatMoney(
          nights *
            selectedHotel.DailyTax *
            (selectedHotel.DUInr + selectedHotel.DoubleRoomNr * 2),
          "€"
        )}
      </TableCell>
    </TableRow>
  );
};

export default DailyTaxRow;
