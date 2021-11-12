import { Box, AppBar, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { renderTab } from "./logic";

const VendorOptionsTab = ({ tabList, category }) => {
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
          {tabList.map((item) => (
            <Tab key={item._id} label={item.name} />
          ))}
        </Tabs>
      </AppBar>
      {tabList.map((item, index) => {
        return renderTab(item, index, tabValue, category);
      })}
    </Box>
  );
};

export default VendorOptionsTab;
