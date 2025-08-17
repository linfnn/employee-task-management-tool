import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import {
  Box,
  List,
  CssBaseline,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import BadgeIcon from "@mui/icons-material/Badge";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 280;

export const menuSidebar = [
  {
    icon: <AccountCircleIcon style={{ color: "#aeb2c2" }} />,
    text: "My Account",
    href: "/#",
  },
  {
    icon: <SettingsIcon style={{ color: "#aeb2c2" }} />,
    text: "Settings Account",
    href: "/account",
  },
  {
    icon: <LogoutIcon style={{ color: "#aeb2c2" }} />,
    text: "Logout",
    href: "/#",
  },
  {
    icon: <BadgeIcon style={{ color: "#aeb2c2" }} />,
    text: "Employee Management",
    href: "/",
  },
  {
    icon: <AssignmentTurnedInIcon style={{ color: "#aeb2c2" }} />,
    text: "Task Management",
    href: "/task-management",
  },
  {
    icon: <MarkUnreadChatAltIcon style={{ color: "#aeb2c2" }} />,
    text: "Chatbox",
    href: "/chat",
  },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function AdminSidebar({ contentProp, activeFlag }) {
  const dispatch = useDispatch();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(innerWidth <= 982 ? false : true);
  useLayoutEffect(() => {
    window.addEventListener("resize", () => setInnerWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () =>
        setInnerWidth(window.innerWidth)
      );
  }, [innerWidth]);

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ backgroundColor: "#192039" }}>
          <IconButton onClick={handleDrawerClose} style={{ color: "#aeb2c2" }}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <List style={{ height: "100%", backgroundColor: "#192039" }}>
          {menuSidebar.map((value, index) => (
            <div key={index}>
              <hr
                style={{
                  display:
                    index === 0 || index === 1 || index == 3 ? "block" : "none",
                  color: "#aeb2c2",
                  margin: "5px 0",
                }}
              ></hr>
              <ListItem disablePadding sx={{ display: "block" }}>
                <Link to={value.href} style={{ textDecoration: "none" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      color: "#aeb2c2",
                      backgroundColor:
                        activeFlag === value.text ? "#264dd8" : "#192039",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {value.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={value.text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            </div>
          ))}
          <hr
            style={{
              color: "#aeb2c2",
              margin: "5px 0",
            }}
          ></hr>
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {contentProp}
      </Box>
    </Box>
  );
}
