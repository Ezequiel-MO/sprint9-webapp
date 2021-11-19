import { TableCell, TableRow } from "@mui/material";
import MultipleChoice from "../multipleChoice/MultipleChoice";

const LunchRows = ({ pax, date, lunchOptions }) => {
  return (
    <>
      {lunchOptions.length === 1 ? (
        <TableRow>
          <TableCell></TableCell>
          <TableCell>{date}</TableCell>
          <TableCell>{lunchOptions[0].name}</TableCell>
          <TableCell>{pax}</TableCell>
          <TableCell>{lunchOptions[0].price}</TableCell>
          <TableCell>
            {parseInt(pax) * parseInt(lunchOptions[0].price)}
          </TableCell>
        </TableRow>
      ) : (
        <TableRow>
          <TableCell></TableCell>
          <TableCell>{date}</TableCell>
          <TableCell>
            <MultipleChoice options={lunchOptions} />
          </TableCell>
          <TableCell>{pax}</TableCell>
          <TableCell>{lunchOptions[0].price}</TableCell>
          <TableCell>
            {parseInt(pax) * parseInt(lunchOptions[0].price)}
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default LunchRows;
