import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const HotelChoice = ({ hotels }) => {
  const [selectedHotel, setSelectedHotel] = useState(hotels[0].name);

  const handleChange = (event) => {
    setSelectedHotel(event.target.value);
  };
  return (
    <FormControl variant='standard' sx={{ m: 1, minWidth: "15rem" }}>
      <Select
        value={selectedHotel}
        onChange={handleChange}
        label={selectedHotel}
      >
        {hotels.map((hotel) => (
          <MenuItem key={hotel.name} value={hotel.name}>
            {hotel.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default HotelChoice;
