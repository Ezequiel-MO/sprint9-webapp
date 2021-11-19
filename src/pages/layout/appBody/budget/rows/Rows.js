import { TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import useGetSelectedOption from "../../../../../hooks/useGetSelectedOption";
import MultipleChoice from "../multipleChoice/MultipleChoice";
import { accounting } from "accounting";

const Rows = ({ pax, date, options, cat }) => {
  const [value, setValue] = useState(options[0].name);

  const { selectedOption } = useGetSelectedOption(options, value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <TableRow>
      <TableCell>{date}</TableCell>
      {options.length === 1 ? (
        <>
          <TableCell>{cat}</TableCell>
          <TableCell>{options[0].name}</TableCell>
          <TableCell>{pax}</TableCell>
          <TableCell>{accounting.formatMoney(options[0].price, "€")}</TableCell>
          <TableCell>
            {accounting.formatMoney(pax * options[0].price, "€")}
          </TableCell>
        </>
      ) : (
        <>
          <TableCell>{`${cat} options`}</TableCell>
          <TableCell>
            <MultipleChoice
              options={options}
              value={value}
              handleChange={handleChange}
            />
          </TableCell>
          <TableCell>{pax}</TableCell>
          <TableCell>
            {accounting.formatMoney(selectedOption.price, "€")}
          </TableCell>
          <TableCell>
            {accounting.formatMoney(pax * selectedOption.price, "€")}
          </TableCell>
        </>
      )}
    </TableRow>
  );
};

export default Rows;
