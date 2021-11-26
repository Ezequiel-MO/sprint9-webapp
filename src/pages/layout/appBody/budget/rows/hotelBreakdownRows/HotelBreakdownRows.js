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
import BreakfastRow from "./BreakfastRow";
import DailyTaxRow from "./DailyTaxRow";
import DoubleRoomRow from "./DoubleRoomRow";
import DUIRow from "./DUIRow";

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
                <DUIRow selectedHotel={selectedHotel} nights={nights} />
                <DoubleRoomRow selectedHotel={selectedHotel} nights={nights} />
                <DailyTaxRow selectedHotel={selectedHotel} nights={nights} />
                {selectedHotel.breakfast && (
                  <BreakfastRow selectedHotel={selectedHotel} nights={nights} />
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
