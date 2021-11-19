import { TableCell, TableRow } from "@mui/material";

const DinnerRows = ({ pax, date, dinnerOptions }) => {
  return (
    <>
      {dinnerOptions.map((dinnerOption) => (
        <TableRow key={dinnerOption._id}>
          <TableCell></TableCell>
          <TableCell>{date}</TableCell>
          <TableCell>{dinnerOption.name}</TableCell>
          <TableCell>{pax}</TableCell>
          <TableCell>{dinnerOption.price}</TableCell>
          <TableCell>{parseInt(pax) * parseInt(dinnerOption.price)}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default DinnerRows;
