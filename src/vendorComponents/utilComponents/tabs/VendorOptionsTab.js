import { Box, AppBar, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import Hotel from "../../hotel/Hotel";

const VendorOptionsTab = ({ hotels }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (ev, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <AppBar position='static'>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          variant='fullWidth'
          indicatorColor='secondary'
          textColor='inherit'
        >
          {hotels.map((hotel, index) => (
            <Tab key={hotel._id} label={hotel.name} />
          ))}
        </Tabs>
      </AppBar>
      {hotels.map((hotel, index) => {
        if (index === tabValue) {
          return <Hotel hotel={hotel} key={hotel._id} />;
        }
      })}
    </Box>
  );
};

export default VendorOptionsTab;
