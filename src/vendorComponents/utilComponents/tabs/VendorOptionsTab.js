import { Box, AppBar, Tabs, Tab } from "@mui/material";
import { selectTabOption } from "../../../features/TabOptionSlice";
import { renderTab } from "./logic";
import { useSelector, useDispatch } from "react-redux";

const VendorOptionsTab = ({ tabList, category }) => {
  const dispatch = useDispatch();
  const tabValue = useSelector(selectTabOption);

  const handleChange = (ev, newValue) => {
    dispatch(selectTabOption(newValue));
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
