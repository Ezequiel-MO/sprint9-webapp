import { TreeView, TreeItem } from "@mui/lab";
import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { SET_TABOPTION } from "../../../../../features/TabOptionSlice";
import useSidebarMenu from "./useSidebarMenu";

const SidebarMenu = ({ codeMatch }) => {
  const dispatch = useDispatch();
  const { sidebarContent } = useSidebarMenu(codeMatch);
  const renderTree = (nodes) => {
    return (
      <TreeItem nodeId='root' label={nodes.name}>
        {nodes.children &&
          nodes.children?.map((node) => (
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
      {sidebarContent && renderTree(sidebarContent)}
    </TreeView>
  );
};

export default SidebarMenu;
