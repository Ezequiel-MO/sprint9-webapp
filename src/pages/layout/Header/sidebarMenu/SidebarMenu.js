import { Drawer, Box, Divider } from "@mui/material";
import { TreeView, TreeItem } from "@mui/lab";
import { Icon } from "@iconify/react";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

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
              children: item.events.map((event) => {
                return {
                  id: event._id,
                  name: event.name,
                };
              }),
            },
            {
              id: `lunch-id-${index}`,
              name: "lunch",
              icon: <Icon icon='emojione:shallow-pan-of-food' />,
              children: item.lunch.map((lunch) => {
                return {
                  id: lunch._id,
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
                  id: dinner._id,
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

  const renderTree = (nodes) => {
    console.log("nodes=>", nodes);
    return (
      <TreeItem nodeId={nodes.id} label={nodes.name}>
        {nodes.children &&
          nodes.children.map((node) => (
            <TreeItem nodeId={node.id} label={node.name} key={node.id}>
              {node.children &&
                node.children.map((child) => (
                  <TreeItem
                    nodeId={child.id}
                    label={child.name}
                    key={child.id}
                    icon={child.icon}
                  >
                    {child.children &&
                      child.children.map((grandChild) => (
                        <Link
                          key={grandChild.id}
                          to={grandChild.id}
                          spy={true}
                          smooth={true}
                          activeClass='active'
                          duration={500}
                          offset={-70}
                        >
                          <TreeItem
                            nodeId={grandChild.id}
                            label={grandChild.name}
                          />
                        </Link>
                      ))}
                  </TreeItem>
                ))}
            </TreeItem>
          ))}
      </TreeItem>
    );
  };

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
        {sidebarObj && renderTree(sidebarObj)}
      </TreeView>
    </Drawer>
  );
};

export default SidebarMenu;
