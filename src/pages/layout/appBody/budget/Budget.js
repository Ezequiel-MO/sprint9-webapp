import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import DayRow from "./rows/DayRow";
const Budget = ({ pax, schedule }) => {
  return (
    <Table stickyHeader size='small'>
      <TableHead>
        <TableRow>
          <TableCell width='5%' />
          <TableCell width='20%'>Date</TableCell>
          <TableCell width='35%'>Service</TableCell>
          <TableCell width='5%'>pax</TableCell>
          <TableCell width='15%'>Unit cost w/VAT</TableCell>
          <TableCell width='10%'>Cost incl VAT</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {schedule.map((day) => (
          <DayRow key={day._id} day={day} pax={pax} />
        ))}
      </TableBody>
    </Table>
  );
};

export default Budget;
