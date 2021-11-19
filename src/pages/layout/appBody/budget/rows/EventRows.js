import { TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import useGetSelectedOption from "../../../../../hooks/useGetSelectedOption";
import MultipleChoice from "../multipleChoice/MultipleChoice";

const EventRows = ({ pax, date, eventOptions }) => {
  const [eventValue, setEventValue] = useState(eventOptions[0].name);

  const { selectedOption: selectedEventOption } = useGetSelectedOption(
    eventOptions,
    eventValue
  );

  const handleChange = (e) => {
    setEventValue(e.target.value);
  };

  return (
    <TableRow>
      <TableCell>{date}</TableCell>
      {eventOptions.length === 1 ? (
        <>
          <TableCell>Activity</TableCell>
          <TableCell>{eventOptions[0].name}</TableCell>
          <TableCell>{pax}</TableCell>
          <TableCell>{eventOptions[0].price}</TableCell>
          <TableCell>{pax * eventOptions[0].price}</TableCell>
        </>
      ) : (
        <>
          <TableCell>Activity Options</TableCell>
          <TableCell>
            <MultipleChoice
              options={eventOptions}
              value={eventValue}
              handleChange={handleChange}
            />
          </TableCell>
          <TableCell>{pax}</TableCell>
          <TableCell>{selectedEventOption.price}</TableCell>
          <TableCell>{pax * selectedEventOption.price}</TableCell>
        </>
      )}
    </TableRow>
  );
};

export default EventRows;
