import { Box, IconButton, Badge, Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: 2,
      p: 2,
    }}
  >
    <Badge badgeContent={2} color="error">
      <NotificationsIcon />
    </Badge>
    <Avatar>U</Avatar>
  </Box>
);


export default Header;
