import { TableCell } from "@mui/material";
import { accounting } from "accounting";

const TransferCells = ({ pax, options, cat, description, id }) => {
  const getPrice = () => {
    const option = options[0];
    console.log("option", option);
    //extract the value from the option key which is not vehicleCapacity or _id and return it
    for (const key in option) {
      if (key !== "vehicleCapacity" && key !== "_id") {
        return option[key];
      }
    }
  };
  console.log("get price", getPrice());

  return (
    <>
      <TableCell>{cat || description}</TableCell>
      <TableCell>{`${options[0].vehicleCapacity} seater Bus `}</TableCell>
      <TableCell>{pax}</TableCell>
      <TableCell>
        {accounting.formatMoney(
          id === "transfers" ? getPrice() : options[0].transfer_in_out,
          "€"
        )}
      </TableCell>
      <TableCell>
        {accounting.formatMoney(
          id === "transfers"
            ? pax * getPrice()
            : pax * options[0].transfer_in_out,
          "€"
        )}
      </TableCell>
    </>
  );
};

export default TransferCells;
