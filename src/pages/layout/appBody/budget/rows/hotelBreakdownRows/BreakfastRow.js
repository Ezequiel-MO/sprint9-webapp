import { TableCell, TableRow } from "@mui/material";
import accounting from "accounting";

const BreakfastRow = ({ selectedHotel, nights }) => {
  return (
    <TableRow>
      <TableCell component='th' scope='row'>
        Breakfast
      </TableCell>
      <TableCell>
        {selectedHotel.DUInr + selectedHotel.DoubleRoomNr * 2}
      </TableCell>
      <TableCell>{nights}</TableCell>
      <TableCell>
        {accounting.formatMoney(selectedHotel.breakfast, "€")}
      </TableCell>
      <TableCell>
        {accounting.formatMoney(
          nights *
            selectedHotel.breakfast *
            (selectedHotel.DUInr + selectedHotel.DoubleRoomNr * 2),
          "€"
        )}
      </TableCell>
    </TableRow>
  );
};

export default BreakfastRow;
