import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import DayRow from "./renderTable/rows/DayRow";
import HotelBreakdownRows from "./renderTable/rows/hotelBreakdownRows/HotelBreakdownRows";
import HotelRows from "./renderTable/rows/HotelRows";
import { useState } from "react";
import TotalBudgetCost from "./totalBudgetCost/TotalBudgetCost";
import BudgetPerCategory from "./totalBudgetCost/budgetPerCategory/BudgetPerCategory";

const Budget = ({ pax, schedule, hotels }) => {
  const [open, setOpen] = useState(true);
  const [hotelPricesObj, setHotelPricesObj] = useState({});
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Paper>
      <Table stickyHeader size='small'>
        <TableHead>
          <TableRow>
            <TableCell width='5%' />
            <TableCell width='20%'>Event Type</TableCell>
            <TableCell width='35%'>Service</TableCell>
            <TableCell width='5%'>pax</TableCell>
            <TableCell width='15%'>Unit cost w/VAT</TableCell>
            <TableCell width='10%'>Cost incl VAT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hotels.length > 0 ? (
            <>
              <HotelRows
                hotels={hotels}
                handleClick={handleClick}
                open={open}
                nights={schedule.length}
                setHotelPricesObj={setHotelPricesObj}
                hotelPricesObj={hotelPricesObj}
              />
              <HotelBreakdownRows
                hotels={hotels}
                open={open}
                nights={schedule.length}
                selectedHotel={hotelPricesObj}
              />
            </>
          ) : null}
          {schedule.map((day) => (
            <DayRow key={day._id} day={day} pax={pax} />
          ))}
          <TotalBudgetCost pax={pax} selectedHotel={hotelPricesObj} />
        </TableBody>
      </Table>
      <BudgetPerCategory pax={pax} selectedHotel={hotelPricesObj} />
    </Paper>
  );
};

export default Budget;
