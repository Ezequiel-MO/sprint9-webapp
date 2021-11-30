import { FormControl, MenuItem, Select, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_BUDGET_SCHEDULE } from "../../../../../features/BudgetSlice";

const MultipleChoice = ({
  options,
  date,
  id,
  value,
  handleChange,
  selectedOption,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updatedObject = { date, id, selectedOption };
    //dispatch action to update budget containing date, cat and selected option
    dispatch(UPDATE_BUDGET_SCHEDULE(updatedObject));
  }, [selectedOption]);

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
