import { useState } from "react";
import {
  Badge,
  Box,
  Button,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import ModeSelect from "~/components/ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";

import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import SvgIcon from "@mui/material/SvgIcon";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Template from "./Menus/Template";
import NotificationsNone from "@mui/icons-material/NotificationsNone";
import HelpOutline from "@mui/icons-material/HelpOutline";
import Profile from "./Menus/Profile";
import Drawer from "@mui/material/Drawer";
import PropTypes from "prop-types";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const AppBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  //xử lý input search
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };
  return (
    <>
      <Box
        px={2}
        sx={{
          width: "100%",
          height: (theme) => theme.trello.appBarHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "primary.main" }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <AppsIcon sx={{ color: "primary.main" }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <SvgIcon
                component={TrelloIcon}
                inheritViewBox
                sx={{ color: "primary.main" }}
                fontSize="small"
              />
              <Typography
                variant="span"
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "primary.main",
                }}
              >
                Trello
              </Typography>
            </Box>
            <Workspaces />
            <Recent />
            <Starred />
            <Template />
            <Button variant="outlined">Create</Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            id="outlined-size-small"
            placeholder="Search sth"
            onFocus={handleFocus}
            onBlur={handleBlur}
            sx={{
              width: focused ? "400px" : "200px",
              "& .MuiInputBase-root": {
                height: "30px",
              },
              display: { xs: "none", sm: "block" },
            }}
            InputProps={{
              startAdornment: (
                <SearchIcon
                  sx={{
                    mr: 1,
                    color: (theme) => theme.palette.primary.main,
                  }}
                />
              ),
            }}
          />

          <ModeSelect />

          <Tooltip title="Notification">
            <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
              <NotificationsNone sx={{ color: "primary.main" }} />
            </Badge>
          </Tooltip>

          <Tooltip title="Help">
            <HelpOutline sx={{ cursor: "pointer", color: "primary.main" }} />
          </Tooltip>

          <Profile />
        </Box>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            "& .MuiButton-root": { padding: "10px 0px" },
            "& .MuiButton-outlined": { padding: "5px 15px" },
          }}
        >
          <Box sx={{ padding: 10 }} onClick={handleDrawerToggle}>
            <Workspaces />
            <Recent />
            <Starred />
            <Template />
            <Button variant="outlined">Create</Button>
            <TextField
              id="outlined-search"
              label="Search sth"
              type="search"
              size="small"
              sx={{ minWidth: 120, mt: 2 }}
            />
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

AppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AppBar;
