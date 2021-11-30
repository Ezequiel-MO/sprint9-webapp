import { TableCell, TableRow } from "@mui/material";
import accounting from "accounting";
import { getHotelTotal, getTotalBudget } from "./logic";
import { useSelector } from "react-redux";
import { selectBudget } from "../../../../features/BudgetSlice";

const TotalBudgetCost = ({ pax, selectedHotel }) => {
  const schedule = useSelector(selectBudget);
  console.log("schedule in budget => yeahhh", schedule);
  return (
    <TableRow>
      <TableCell colSpan={3} />
      <TableCell colSpan={2}>
        <strong>TOTAL BUDGET</strong>
      </TableCell>
      <TableCell>
        <strong>
          {accounting.formatMoney(
            getTotalBudget(
              pax,
              schedule,
              getHotelTotal(selectedHotel, schedule.length)
            ),
            "€"
          )}
        </strong>
      </TableCell>
    </TableRow>
  );
};

export default TotalBudgetCost;
