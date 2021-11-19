import { TableCell, TableRow } from "@mui/material";

const LunchRows = ({ pax, date, lunchOptions }) => {
  return (
    <>
      {lunchOptions.map((lunchOption) => (
        <TableRow key={lunchOption._id}>
          <TableCell></TableCell>
          <TableCell>{date}</TableCell>
          <TableCell>{lunchOption.name}</TableCell>
          <TableCell>{pax}</TableCell>
          <TableCell>{lunchOption.price}</TableCell>
          <TableCell>{parseInt(pax) * parseInt(lunchOption.price)}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default LunchRows;
