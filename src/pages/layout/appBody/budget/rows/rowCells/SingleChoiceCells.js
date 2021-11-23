import { TableCell } from "@mui/material";
import { accounting } from "accounting";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const SingleChoiceCells = ({ pax, options, cat }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    //if cat Morning-Event is received, then dispatch action to update selectedBudget
    if (cat === "Morning-Event") {
      dispatch({
        type: "selectedBudget/SET_SELECTEDMORNINGEVENTS",
        payload: options,
      });
    }
    //if cat Lunch is received, then dispatch action to update selectedBudget
    if (cat === "Lunch") {
      dispatch({
        type: "selectedBudget/SET_SELECTEDLUNCHES",
        payload: options,
      });
    }
    //if cat Afternoon-Event is received, then dispatch action to update selectedBudget
    if (cat === "Afternoon-Event") {
      dispatch({
        type: "selectedBudget/SET_SELECTEDAFTERNOONEVENTS",
        payload: options,
      });
    }
    //if cat Dinner is received, then dispatch action to update selectedBudget
    if (cat === "Dinner") {
      dispatch({
        type: "selectedBudget/SET_SELECTEDDINNERS",
        payload: options,
      });
    }
  }, [options, cat, dispatch]);

  return (
    <>
      <TableCell>{cat}</TableCell>
      <TableCell>{options[0].name}</TableCell>
      <TableCell>{pax}</TableCell>
      <TableCell>{accounting.formatMoney(options[0].price, "€")}</TableCell>
      <TableCell>
        {accounting.formatMoney(pax * options[0].price, "€")}
      </TableCell>
    </>
  );
};

export default SingleChoiceCells;
