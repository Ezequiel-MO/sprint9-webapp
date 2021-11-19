import { TableCell, TableRow } from "@mui/material";
import SingleChoiceCells from "./rowCells/SingleChoiceCells";
import MultipleChoiceCells from "./rowCells/MultipleChoiceCells";
const Rows = ({ pax, date, options, cat }) => {
  return (
    <TableRow>
      <TableCell>{date}</TableCell>
      {options.length === 1 ? (
        <SingleChoiceCells pax={pax} options={options} cat={cat} />
      ) : (
        <MultipleChoiceCells pax={pax} options={options} cat={cat} />
      )}
    </TableRow>
  );
};

export default Rows;
