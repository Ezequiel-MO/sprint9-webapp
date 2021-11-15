import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState, useEffect } from "react";

const SidebarMenu = ({ anchor, toggleDrawer, open, codeMatch }) => {
  const [sidebarArray, setSidebarArray] = useState([]);
  useEffect(() => {
    //create sidebarArray by mapping the codeMatch.schedule array
    setSidebarArray(
      codeMatch.schedule.map((item) => {
        return {
          id: item._id,
          title: item.date,
          events: item.events.map((event) => event.title),
          lunch: item.lunch.map((lunchItem) => lunchItem.name),
          dinner: item.dinner.map((dinnerItem) => dinnerItem.name),
        };
      })
    );
  }, [codeMatch]);

  const list = (anchor) => (
    <Box
      sx={{ width: 500 }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {sidebarArray.map((item) => (
          <ListItem button key={item.id}>
            <ListItemText primary={item.title} />
            {
              <List>
                <ListItem>
                  <ListItemText primary={item.events} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={item.lunch} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={item.dinner} />
                </ListItem>
              </List>
            }

            <Divider />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  /*  <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */

  return (
    <Drawer anchor={anchor} open={open} onClose={toggleDrawer(false)}>
      {list("left")}
    </Drawer>
  );
};

export default SidebarMenu;
