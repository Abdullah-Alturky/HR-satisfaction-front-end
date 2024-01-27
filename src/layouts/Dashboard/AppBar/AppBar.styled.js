import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";

export const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, drawerWidth }) => ({
  height: "4rem",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  boxShadow: "none",
  backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AllTimeText = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
  fontSize: "1rem",
  marginLeft: "1rem",
}));
