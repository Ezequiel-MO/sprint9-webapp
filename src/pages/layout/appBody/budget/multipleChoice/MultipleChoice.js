import { FormControl, MenuItem, Select, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectBudget,
  UPDATE_BUDGET_SCHEDULE,
} from "../../../../../features/BudgetSlice";

const MultipleChoice = ({ options, date, id }) => {
  const [value, setValue] = useState(options[0].name);
  const dispatch = useDispatch();
  //retrieve budget from redux store
  const schedule = useSelector(selectBudget);

  useEffect(() => {
    console.log("value", value);
    console.log("date", date);
    console.log("cat", id);
    //find selected option based on value
    const selectedOption = options.find((option) => option.name === value);
    console.log("selectedOption", selectedOption);
    const updatedObject = { date, id, selectedOption };
    //dispatch action to update budget containing date, cat and selected option
    dispatch(UPDATE_BUDGET_SCHEDULE(updatedObject));
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant='standard' sx={{ m: 1, minWidth: "15rem" }}>
        <Select value={value} onChange={handleChange}>
          {options.map((option) => (
            <MenuItem key={option._id} value={option.name}>
              <Typography variant='body1'>{option.name}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MultipleChoice;
