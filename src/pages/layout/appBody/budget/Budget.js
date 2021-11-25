import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import DayRow from "./rows/DayRow";
import HotelBreakdownRows from "./rows/HotelBreakdownRows";
import HotelRows from "./rows/HotelRows";
import { useState } from "react";

const Budget = ({ pax, schedule, hotels }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
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
            <HotelRows hotels={hotels} handleClick={handleClick} open={open} />
            <HotelBreakdownRows hotels={hotels} open={open} />
          </>
        ) : null}
        {schedule.map((day) => (
          <DayRow key={day._id} day={day} pax={pax} />
        ))}
      </TableBody>
    </Table>
  );
};

export default Budget;
