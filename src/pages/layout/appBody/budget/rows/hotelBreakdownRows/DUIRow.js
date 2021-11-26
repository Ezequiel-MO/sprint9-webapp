import { TableCell, TableRow } from "@mui/material";
import accounting from "accounting";

const DUIRow = ({ selectedHotel, nights }) => {
  return (
    <TableRow>
      <TableCell component='th' scope='row'>
        Double Room for Single Use
      </TableCell>
      <TableCell>{selectedHotel.DUInr}</TableCell>
      <TableCell>{nights}</TableCell>
      <TableCell>
        {accounting.formatMoney(selectedHotel.DUIprice, "€")}
      </TableCell>
      <TableCell>
        {accounting.formatMoney(
          selectedHotel.DUInr * selectedHotel.DUIprice * nights,
          "€"
        )}
      </TableCell>
    </TableRow>
  );
};

export default DUIRow;
