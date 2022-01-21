import { TableCell, TableRow } from "@mui/material";
import SingleChoiceCells from "./rowCells/SingleChoiceCells";
import MultipleChoiceCells from "./rowCells/MultipleChoiceCells";
import TransferCells from "./rowCells/TransferCells";

const Rows = ({ pax, date, options, cat, id, description }) => {
  if (id === "transfer_in" || id === "transfer_out") {
    return (
      <TableRow>
        <TableCell>{date}</TableCell>
        <TransferCells description={description} options={options} pax={pax} />;
      </TableRow>
    );
  }
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
