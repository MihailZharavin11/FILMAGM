import React from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem disablePadding>
          <Link to={"/settings"}>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={["lg", "xl"]}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"}>Movies recomendation</Link>
          </Typography>

          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Link to={"/settings"}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Settings
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
};
