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
      children: codeMatch.schedule.map((item, index) => {
        return {
          id: item._id,
          name: item.date,
          children: [
            {
              id: `events-id-${index}`,
              name: "events",
              icon: <Icon icon='ic:twotone-emoji-events' color='#ea5933' />,
              children: item.events.map((event, index) => {
                return {
                  id: `${event._id}-${index}`,
                  name: event.name,
                };
              }),
            },
            {
              id: `lunch-id-${index}`,
              name: "lunch",
              icon: <Icon icon='emojione:shallow-pan-of-food' />,
              children: item.lunch.map((lunch, index) => {
                return {
                  id: `${lunch._id}-${index}`,
                  name: lunch.name,
                };
              }),
            },
            {
              id: `dinner-id-${index}`,
              name: "dinner",
              icon: <Icon icon='cil:dinner' color='#ea5933' />,
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
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      label={nodes.name}
      icon={nodes.icon}
    >
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
          <Icon icon='eva:collapse-fill' color='#ea5933' width='75' />
        }
        defaultExpandIcon={
          <Icon icon='ic:baseline-expand-more' color='#ea5933' width='75' />
        }
        sx={{
          height: 90,
          flexGrow: 1,
          maxWidth: 500,
          overflowY: "auto",
          padding: "1.5rem",
          marginTop: "5rem",
        }}
      >
        {renderTree(sidebarObj)}
      </TreeView>
    </Drawer>
  );
};

export default SidebarMenu;
