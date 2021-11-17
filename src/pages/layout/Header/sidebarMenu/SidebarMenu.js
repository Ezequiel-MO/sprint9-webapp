import { TreeView, TreeItem } from "@mui/lab";
import { Icon } from "@iconify/react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { SET_TABOPTION } from "../../../../features/TabOptionSlice";

const SidebarMenu = ({ codeMatch }) => {
  const [sidebarObj, setSidebarObj] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    const sidebarContent = {
      id: "root",
      name: "Day Program",
      children: codeMatch.schedule.map((item, index) => {
        return {
          id: item._id,
          name: item.date,
          icon: <Icon icon='akar-icons:calendar' color='#ea5933' width='50' />,
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
            <TreeItem
              nodeId={node.id}
              label={node.name}
              key={node.id}
              icon={node.icon}
            >
              {node.children &&
                node.children.map((child) => (
                  <TreeItem
                    nodeId={child.id}
                    label={child.name}
                    key={child.id}
                    icon={child.icon}
                  >
                    {child.children &&
                      child.children.map((grandChild, index) => (
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
                            onClick={(e) => dispatch(SET_TABOPTION(index))}
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
    <TreeView
      defaultExpanded={["root"]}
      defaultCollapseIcon={
        <Icon icon='eva:collapse-fill' color='#ea5933' width='75' />
      }
      defaultExpandIcon={
        <Icon icon='ic:baseline-expand-more' color='#ea5933' width='75' />
      }
      sx={{
        height: 40,
        flexGrow: 1,
        maxWidth: 500,
        overflowY: "auto",
        padding: "1rem",
        marginTop: "5rem",
      }}
    >
      {sidebarObj && renderTree(sidebarObj)}
    </TreeView>
  );
};

export default SidebarMenu;
