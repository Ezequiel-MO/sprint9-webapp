import { TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import useGetSelectedOption from "../../../../../hooks/useGetSelectedOption";
import MultipleChoice from "../multipleChoice/MultipleChoice";
import { accounting } from "accounting";

const DinnerRows = ({ pax, date, dinnerOptions }) => {
  const [dinnerValue, setDinnerValue] = useState(dinnerOptions[0].name);

  const { selectedOption: selectedDinnerOption } = useGetSelectedOption(
    dinnerOptions,
    dinnerValue
  );

  const handleChange = (e) => {
    setDinnerValue(e.target.value);
  };

  return (
    <TableRow>
      <TableCell>{date}</TableCell>
      {dinnerOptions.length === 1 ? (
        <>
          <TableCell>Dinner</TableCell>
          <TableCell>{dinnerOptions[0].name}</TableCell>
          <TableCell>{pax}</TableCell>
          <TableCell>
            {accounting.formatMoney(dinnerOptions[0].price, "€")}
          </TableCell>
          <TableCell>
            {accounting.formatMoney(pax * dinnerOptions[0].price, "€")}
          </TableCell>
        </>
      ) : (
        <>
          <TableCell>Dinner Options</TableCell>
          <TableCell>
            <MultipleChoice
              options={dinnerOptions}
              value={dinnerValue}
              handleChange={handleChange}
            />
          </TableCell>
          <TableCell>{pax}</TableCell>
          <TableCell>
            {accounting.formatMoney(selectedDinnerOption.price, "€")}
          </TableCell>
          <TableCell>
            {accounting.formatMoney(pax * selectedDinnerOption.price, "€")}
          </TableCell>
        </>
      )}
    </TableRow>
  );
};

export default DinnerRows;
