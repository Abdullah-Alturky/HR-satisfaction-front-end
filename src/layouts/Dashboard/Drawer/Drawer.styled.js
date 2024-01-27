import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import styled from "@mui/material/styles/styled";

export const UserBox = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  marginLeft: "1rem",
  "& svg": {
    marginRight: "0.5rem",
  },
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const StyledList = styled(List)(({ theme }) => ({
  paddingLeft: "1rem",
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
  fontSize: "1.1rem",
  marginBottom: "1rem",
}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: "0",
  paddingLeft: "1rem",
}));

export const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: "2rem",
}));

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  "& span": {
    fontSize: "1rem",
  },
}));
