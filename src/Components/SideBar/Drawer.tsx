import * as React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { library } from '@fortawesome/fontawesome-svg-core'; // Manage your icons
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { DrawerNavProps } from "./SideBar.types";


// Add all solid icons to the library
library.add(fas);

export default function DrawerNav({ routes }:DrawerNavProps) {
  console.log(routes);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleNavigate = (url: string) => {
    navigate(url);
    setOpen(false); // Close drawer upon navigation
  };

 // This array should come from your routes configuration

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {routes.map((route, index) => (
          <React.Fragment key={`${route.pageTitle}-${index}`}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigate(route.url)}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={route.icon} />
                </ListItemIcon>
                <ListItemText primary={route.text} />
              </ListItemButton>
            </ListItem>
            {route.children && route.children.map(child => (
              <ListItem key={child.pageTitle} disablePadding sx={{ pl: 4 }}>
                <ListItemButton onClick={() => handleNavigate(child.url)}>
                  <ListItemIcon>
                    <FontAwesomeIcon icon={child.icon} />
                  </ListItemIcon>
                  <ListItemText primary={child.text} />
                </ListItemButton>
              </ListItem>
            ))}
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
