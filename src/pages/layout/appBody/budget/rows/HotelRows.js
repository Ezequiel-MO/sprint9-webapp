import { IconButton, TableCell, TableRow } from "@mui/material";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import MultipleChoice from "../multipleChoice/MultipleChoice";
import useGetSelectedOption from "../../../../../hooks/useGetSelectedOption";
import accounting from "accounting";
import { getHotelTotal } from "../logic";

const HotelRows = ({ hotels }) => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState(hotels.length > 0 ? hotels[0].name : "");

  const { selectedOption } = useGetSelectedOption(hotels, value);

  useEffect(() => {
    console.log("selectedOption", selectedOption);
  }, [selectedOption]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <TableRow>
      <TableCell>
        <IconButton size='small' onClick={() => setOpen(!open)}>
          {open ? (
            <Icon icon='bx:bxs-up-arrow' />
          ) : (
            <Icon icon='bx:bxs-down-arrow' />
          )}
        </IconButton>
      </TableCell>
      <TableCell></TableCell>
      <TableCell>
        <MultipleChoice
          options={hotels}
          value={value}
          handleChange={handleChange}
        />
      </TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell>
        {accounting.formatMoney(getHotelTotal(selectedOption), "€")}
      </TableCell>
    </TableRow>
  );
};

export default HotelRows;
