import { IconButton, TableCell, TableRow } from "@mui/material";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import MultipleChoice from "../../multipleChoice/MultipleChoice";
import accounting from "accounting";
import { getHotelTotal } from "../../logic";

const HotelRows = ({
  hotels,
  handleClick,
  open,
  nights,
  setHotelPricesObj,
  hotelPricesObj,
}) => {
  const [value, setValue] = useState(hotels[0].name);

  useEffect(() => {
    //itereate hotels and find the hotel with the same name as the value
    const selectedHotel = hotels.find((hotel) => hotel.name === value);
    //console.log selectedHotel
    console.log("hey , selected hotel here ", selectedHotel);
    setHotelPricesObj(selectedHotel.price[0]);
  }, [value, hotels]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <TableRow>
      <TableCell>
        <IconButton size='small' onClick={handleClick}>
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
        {accounting.formatMoney(getHotelTotal(hotelPricesObj, nights), "€")}
      </TableCell>
    </TableRow>
  );
};

export default HotelRows;
