import { TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import useGetSelectedOption from "../../../../../hooks/useGetSelectedOption";
import MultipleChoice from "../multipleChoice/MultipleChoice";

const LunchRows = ({ pax, date, lunchOptions }) => {
  const [lunchValue, setLunchValue] = useState(lunchOptions[0].name);

  const { selectedOption: selectedLunchOption } = useGetSelectedOption(
    lunchOptions,
    lunchValue
  );

  console.log("selected lunch option=>", selectedLunchOption);

  const handleChange = (e) => {
    setLunchValue(e.target.value);
  };

  return (
    <TableRow>
      <TableCell>{date}</TableCell>
      {lunchOptions.length === 1 ? (
        <>
          <TableCell>Lunch</TableCell>
          <TableCell>{lunchOptions[0].name}</TableCell>
          <TableCell>{pax}</TableCell>
          <TableCell>{lunchOptions[0].price}</TableCell>
          <TableCell>{pax * lunchOptions[0].price}</TableCell>
        </>
      ) : (
        <>
          <TableCell>Lunch Options</TableCell>
          <TableCell>
            <MultipleChoice
              options={lunchOptions}
              value={lunchValue}
              handleChange={handleChange}
            />
          </TableCell>
          <TableCell>{pax}</TableCell>
          <TableCell>{selectedLunchOption.price}</TableCell>
          <TableCell>{pax * selectedLunchOption.price}</TableCell>
        </>
      )}
    </TableRow>
  );
};

export default LunchRows;
