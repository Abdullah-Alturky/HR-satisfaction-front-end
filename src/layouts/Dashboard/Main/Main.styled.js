import { styled } from "@mui/material";

export const StyledMain = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, drawerWidth }) => ({
  overflow: "hidden",
  marginTop: "2rem",
  width: `100vw`,
  overflowX: "hidden",
  maxWidth: "100vw",
  minHeight: "80vh",
  padding: "2rem",
  flexGrow: 1,
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.grey[100],
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    width: `calc(100vw - ${drawerWidth}px)`,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
