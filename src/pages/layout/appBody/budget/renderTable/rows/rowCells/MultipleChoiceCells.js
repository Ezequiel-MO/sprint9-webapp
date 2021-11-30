import { accounting } from "accounting";
import { TableCell } from "@mui/material";
import MultipleChoice from "../../../multipleChoice/MultipleChoice";
import { useState, useEffect } from "react";

const MultipleChoiceCells = ({ pax, cat, id, options, date }) => {
  const [value, setValue] = useState(options[0].name);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    const selectedOption = options.find((option) => option.name === value);
    setSelected(selectedOption);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <TableCell>{`${cat} options`}</TableCell>
      <TableCell>
        <MultipleChoice
          options={options}
          date={date}
          id={id}
          selectedOption={selected}
          value={value}
          handleChange={handleChange}
        />
      </TableCell>
      <TableCell>{pax}</TableCell>
      <TableCell>{accounting.formatMoney(selected["price"], "€")}</TableCell>
      <TableCell>
        {accounting.formatMoney(pax * selected["price"], "€")}
      </TableCell>
    </>
  );
};

export default MultipleChoiceCells;
