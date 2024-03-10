import React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";

const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ padding: 0 }}
            aria-controls={open ? "account-menu-profile" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-1/428604914_372628092369935_7517796275384753141_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLnRGz0DTIYhIBVnRs-47CagKsawU4IS1qAqxrBTghLTD_gZg05bFXnJwaik9Sy9m4pL0deo3vpnTNNsktDgSE&_nc_ohc=z0WD9LCQbjwAX-nEWkF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfADU_q3QRQinrFg4PwrY_azRjWhaN7szK3gqgZYvLYqpQ&oe=65F17350"
              alt="avatar"
            >
              M
            </Avatar>
          </IconButton>
        </Tooltip>
        <Menu
          id="basic-menu-profile"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button-profile",
          }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> My account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default Profile;
