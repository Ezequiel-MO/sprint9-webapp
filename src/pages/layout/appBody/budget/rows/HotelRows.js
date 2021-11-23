import { IconButton, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import { Icon } from "@iconify/react";

const HotelRows = () => {
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
      <TableCell></TableCell>
    </TableRow>
  );
};

export default HotelRows;
