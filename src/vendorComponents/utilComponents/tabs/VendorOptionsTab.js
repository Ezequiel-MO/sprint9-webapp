import { Box, AppBar, Tabs, Tab, Typography } from "@mui/material";
import {
  selectTabOption,
  SET_TABOPTION,
} from "../../../features/TabOptionSlice";
import { renderTab } from "./logic";
import { useSelector, useDispatch } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const VendorOptionsTab = ({ tabList, category }) => {
  const dispatch = useDispatch();
  const tabValue = useSelector(selectTabOption);

  console.log("tabList=> ", tabList);

  const handleChange = (ev, newValue) => {
    console.log("new value=>", newValue);
    dispatch(SET_TABOPTION(newValue));
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
        return (
          <TabPanel key={item._id} value={tabValue} index={index}>
            {renderTab(item, category)}
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default VendorOptionsTab;
