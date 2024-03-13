import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Avatar, AvatarGroup, Button, Tooltip } from "@mui/material";

const MENU_STYLES = {
  color: "primary.main",
  bgcolor: "white",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};

const BoardBar = () => {
  return (
    <>
      <Box
        px={2}
        sx={{
          width: "100%",
          height: (theme) => theme.trello.boardBarHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          overflowX: "auto",
          borderTop: "1px solid #00bfa5",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Chip
            sx={MENU_STYLES}
            icon={<DashboardIcon />}
            label="With Icon"
            clickable
          />
          <Chip
            sx={MENU_STYLES}
            icon={<VpnLockIcon />}
            label="Public/Private Workspace"
            clickable
          />
          <Chip
            sx={MENU_STYLES}
            icon={<AddToDriveIcon />}
            label="Add to google"
            clickable
          />
          <Chip
            sx={MENU_STYLES}
            icon={<BoltIcon />}
            label="Automation"
            clickable
          />
          <Chip
            sx={MENU_STYLES}
            icon={<FilterListIcon />}
            label="Filters"
            clickable
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button startIcon={<PersonAddIcon />} variant="outlined">
            Invite
          </Button>
          <AvatarGroup
            max={5}
            sx={{
              "& .MuiAvatar-root": {
                width: 30,
                height: 30,
                fontSize: 16,
              },
            }}
          >
            <Tooltip title="Kevin">
              <Avatar alt="Kevin" src="/static/images/avatar/1.jpg" />
            </Tooltip>
            <Tooltip title="Tevin">
              <Avatar alt="Tevin" src="/static/images/avatar/2.jpg" />
            </Tooltip>
            <Tooltip title="Simon">
              <Avatar alt="Simon" src="/static/images/avatar/3.jpg" />
            </Tooltip>
            <Tooltip title="Tete">
              <Avatar alt="Tete" src="/static/images/avatar/4.jpg" />
            </Tooltip>
            <Tooltip title="Vrij">
              <Avatar alt="Vrij" src="/static/images/avatar/5.jpg" />
            </Tooltip>
            <Tooltip title="Vrij">
              <Avatar alt="Vrij" src="/static/images/avatar/5.jpg" />
            </Tooltip>
            <Tooltip title="Vrij">
              <Avatar alt="Vrij" src="/static/images/avatar/5.jpg" />
            </Tooltip>
            <Tooltip title="Vrij">
              <Avatar alt="Vrij" src="/static/images/avatar/5.jpg" />
            </Tooltip>
            <Tooltip title="Vrij">
              <Avatar alt="Vrij" src="/static/images/avatar/5.jpg" />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </>
  );
};

export default BoardBar;
