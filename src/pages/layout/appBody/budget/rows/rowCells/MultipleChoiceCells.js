import { accounting } from "accounting";
import { TableCell } from "@mui/material";
import MultipleChoice from "../../multipleChoice/MultipleChoice";

const MultipleChoiceCells = ({ pax, cat, id, options, date }) => {
  return (
    <>
      <TableCell>{`${cat} options`}</TableCell>
      <TableCell>
        <MultipleChoice options={options} date={date} id={id} />
      </TableCell>
      <TableCell>{pax}</TableCell>
      <TableCell>
        {/*   {accounting.formatMoney(selectedOption["price"], "€")} */}
      </TableCell>
      <TableCell>
        {/*     {accounting.formatMoney(pax * selectedOption["price"], "€")} */}
      </TableCell>
    </>
  );
};

export default MultipleChoiceCells;
