import { IconButton, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import { Icon } from "@iconify/react";
import HotelChoice from "./HotelChoice";

const HotelRows = ({ hotels }) => {
  const [open, setOpen] = useState(true);
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
        <HotelChoice hotels={hotels} />
      </TableCell>
    </TableRow>
  );
};

export default HotelRows;
