import { useState } from "react";
import { accounting } from "accounting";
import { TableCell } from "@mui/material";
import useGetSelectedOption from "../../../../../../hooks/useGetSelectedOption";
import MultipleChoice from "../../multipleChoice/MultipleChoice";

const MultipleChoiceCells = ({ pax, cat, options }) => {
  const [value, setValue] = useState(options[0].name);

  const { selectedOption } = useGetSelectedOption(options, value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
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
      <TableCell>{accounting.formatMoney(selectedOption.price, "€")}</TableCell>
      <TableCell>
        {accounting.formatMoney(pax * selectedOption.price, "€")}
      </TableCell>
    </>
  );
};

export default MultipleChoiceCells;
