import { TableCell, TableRow } from "@mui/material";

const EventRows = ({ pax, date, events }) => {
  return (
    <>
      {events.map((event) => (
        <TableRow key={event._id}>
          <TableCell></TableCell>
          <TableCell>{date}</TableCell>
          <TableCell>{event.title}</TableCell>
          <TableCell>{pax}</TableCell>
          <TableCell>{event.price}</TableCell>
          <TableCell>{parseInt(pax) * parseInt(event.price)}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default EventRows;
