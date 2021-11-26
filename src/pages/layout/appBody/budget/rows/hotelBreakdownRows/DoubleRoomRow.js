import { TableCell, TableRow } from "@mui/material";
import accounting from "accounting";

const DoubleRoomRow = ({ selectedHotel, nights }) => {
  return (
    <TableRow>
      <TableCell component='th' scope='row'>
        Double Room // Twin Room
      </TableCell>
      <TableCell>{selectedHotel.DoubleRoomNr}</TableCell>
      <TableCell>{nights}</TableCell>
      <TableCell>
        {accounting.formatMoney(selectedHotel.DoubleRoomPrice, "€")}
      </TableCell>
      <TableCell>
        {accounting.formatMoney(
          selectedHotel.DoubleRoomNr * selectedHotel.DoubleRoomPrice * nights,
          "€"
        )}
      </TableCell>
    </TableRow>
  );
};

export default DoubleRoomRow;
