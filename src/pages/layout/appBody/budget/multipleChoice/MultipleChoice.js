import { FormControl, MenuItem, Select, Box, Typography } from "@mui/material";

const MultipleChoice = ({ options, value, handleChange }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
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
