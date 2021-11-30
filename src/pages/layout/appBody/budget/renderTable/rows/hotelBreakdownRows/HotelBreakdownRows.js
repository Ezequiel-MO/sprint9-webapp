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
  const {
    DUInr,
    DUIprice,
    DoubleRoomNr,
    DoubleRoomPrice,
    DailyTax,
    breakfast,
  } = selectedHotel;
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
                  units={DUInr}
                  rate={DUIprice}
                  nights={nights}
                  title='Double Room Single Use'
                />
                <BreakdownRow
                  units={DoubleRoomNr}
                  rate={DoubleRoomPrice}
                  nights={nights}
                  title='Double Room //Twin Room'
                />
                <BreakdownRow
                  units={DUInr + DoubleRoomNr * 2}
                  rate={DailyTax}
                  nights={nights}
                  title='City Tax'
                />

                {breakfast && (
                  <BreakdownRow
                    units={DUInr + DoubleRoomNr * 2}
                    rate={breakfast}
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
