import {
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import BreakdownRow from "./BreakdownRow";

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
                <BreakdownRow
                  units={selectedHotel.DUInr}
                  rate={selectedHotel.DUIprice}
                  nights={nights}
                  title='Double Room Single Use'
                />
                <BreakdownRow
                  units={selectedHotel.DoubleRoomNr}
                  rate={selectedHotel.DoubleRoomPrice}
                  nights={nights}
                  title='Double Room //Twin Room'
                />
                <BreakdownRow
                  units={selectedHotel.DUInr + selectedHotel.DoubleRoomNr * 2}
                  rate={selectedHotel.DailyTax}
                  nights={nights}
                  title='City Tax'
                />

                {selectedHotel.breakfast && (
                  <BreakdownRow
                    units={selectedHotel.DUInr + selectedHotel.DoubleRoomNr * 2}
                    rate={selectedHotel.breakfast}
                    nights={nights}
                    title='Breakfast'
                  />
                )}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default HotelBreakdownRows;
