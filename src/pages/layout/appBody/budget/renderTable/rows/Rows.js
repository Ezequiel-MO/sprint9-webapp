import { TableCell, TableRow } from "@mui/material";
import SingleChoiceCells from "./rowCells/SingleChoiceCells";
import MultipleChoiceCells from "./rowCells/MultipleChoiceCells";

const Rows = ({ pax, date, options, cat, id, description }) => {
  return (
    <TableRow>
      <TableCell>{date}</TableCell>
      {options.length === 1 ? (
        <SingleChoiceCells
          pax={pax}
          options={options}
          cat={cat}
          description={description}
        />
      ) : (
        <MultipleChoiceCells
          pax={pax}
          options={options}
          cat={cat}
          id={id}
          date={date}
        />
      )}
    </TableRow>
  );
};

export default Rows;
