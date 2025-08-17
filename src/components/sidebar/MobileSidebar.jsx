import { menuSidebar } from "./AdminSidebar";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { HiOutlineViewList } from "react-icons/hi";

export default function MobileSidebar({ contentProp, activeFlag }) {
  const [state, setState] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(!state);
  };

  const list = () => (
    <Box
      sx={{ width: 220 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List style={{ height: "100%", backgroundColor: "#192039" }}>
        {menuSidebar.map((value, index) => (
          <div key={index}>
            <ListItem disablePadding>
              <Link
                className="custom-link d-flex align-items-center"
                to={value.href}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    color: "#aeb2c2",
                    backgroundColor:
                      activeFlag === value.text ? "#264dd8" : "#192039",
                  }}
                  className="d-flex"
                >
                  <ListItemIcon>{value.icon}</ListItemIcon>
                  <ListItemText primary={value.text} />
                </ListItemButton>
              </Link>
            </ListItem>
            <hr
              style={{
                display:
                  index === 2 || index === 3 || index === 7 || index === 8
                    ? "block"
                    : "none",
                color: "#aeb2c2",
                margin: "5px 0",
              }}
            ></hr>
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between pt-3">
        <Typography variant="h4" className="px-4">
          <b>SKIPLI TEST</b>
        </Typography>
        <Button onClick={toggleDrawer()}>
          <HiOutlineViewList style={{ width: 30, height: 30 }} />
        </Button>
      </div>
      <Drawer anchor="right" open={state} onClose={toggleDrawer()}>
        {list()}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: "100%", paddingTop: 0 }}
      >
        {contentProp}
      </Box>
    </div>
  );
}
