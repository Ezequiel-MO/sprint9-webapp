import {
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import accounting from "accounting";

const HotelBreakdownRows = ({ open, hotels, nights, selectedHotel }) => {
  console.log("hotels breakdown", hotels);
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <Box margin={1}>
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>Nr. Units </TableCell>
                  <TableCell>Nr. of nights </TableCell>
                  <TableCell>Cost per room per night</TableCell>
                  <TableCell>Total Cost</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
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
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default HotelBreakdownRows;
