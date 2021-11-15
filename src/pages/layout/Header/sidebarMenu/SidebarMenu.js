import { Drawer, Box, Divider } from "@mui/material";
import { TreeView, TreeItem } from "@mui/lab";
import { Icon } from "@iconify/react";

import { useState, useEffect } from "react";

const SidebarMenu = ({ anchor, toggleDrawer, open, codeMatch }) => {
  const [sidebarObj, setSidebarObj] = useState({});

  useEffect(() => {
    const sidebarContent = {
      id: "root",
      name: "Day Program",
      children: codeMatch.schedule.map((item) => {
        return {
          id: item._id,
          name: item.date,
          children: [
            {
              id: "events-id",
              name: "events",
              children: item.events.map((event, index) => {
                return {
                  id: `${event._id}-${index}`,
                  name: event.name,
                };
              }),
            },
            {
              id: "lunch-id",
              name: "lunch",
              children: item.lunch.map((lunch, index) => {
                return {
                  id: `${lunch._id}-${index}`,
                  name: lunch.name,
                };
              }),
            },
            {
              id: "dinner-id",
              name: "dinner",
              children: item.dinner.map((dinner, index) => {
                return {
                  id: `${dinner._id}-${index}`,
                  name: dinner.name,
                };
              }),
            },
          ],
        };
      }),
    };
    setSidebarObj(sidebarContent);
  }, [codeMatch]);

  useEffect(() => {
    console.log("sidebar object=>", sidebarObj);
  }, [sidebarObj]);

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <Drawer anchor={anchor} open={open} onClose={toggleDrawer(false)}>
      <TreeView
        defaultExpanded={["root"]}
        defaultCollapseIcon={
          <Icon icon='eva:collapse-fill' color='#ea5933' width='50' />
        }
        defaultExpandIcon={
          <Icon icon='ic:baseline-expand-more' color='#ea5933' width='50' />
        }
        sx={{
          height: 110,
          flexGrow: 1,
          maxWidth: 500,
          overflowY: "auto",
          padding: "1rem",
          marginTop: "5rem",
        }}
      >
        {renderTree(sidebarObj)}
      </TreeView>
    </Drawer>
  );
};

export default SidebarMenu;
