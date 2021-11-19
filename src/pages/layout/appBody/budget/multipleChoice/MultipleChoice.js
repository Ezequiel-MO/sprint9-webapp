import { FormControl, MenuItem, Select } from "@mui/material";

const MultipleChoice = ({ options }) => {
  return (
    <FormControl fullWidth>
      <Select value={options[0].name}>
        {options.map((option) => (
          <MenuItem key={option._id} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultipleChoice;
