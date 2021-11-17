import { Box, AppBar, Tabs, Tab, Typography } from "@mui/material";
import { selectTabOption } from "../../../features/TabOptionSlice";
import { renderTab } from "./logic";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const VendorOptionsTab = ({ tabList, category }) => {
  const [value, setValue] = useState(0);
  const tabOption = useSelector(selectTabOption);

  useEffect(() => {
    setValue(tabOption);
  }, [tabOption]);

  console.log("tabList=> ", tabList);

  const handleChange = (ev, newValue) => {
    console.log("new value=>", newValue);
    setValue(newValue);
  };

  return (
    <Box>
      <AppBar position='static'>
        <Tabs
          value={value}
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
      {tabList.map((item, index) => (
        <TabPanel value={value} index={index} key={item._id}>
          {renderTab(item, index, value, category)}
        </TabPanel>
      ))}
    </Box>
  );
};

export default VendorOptionsTab;
