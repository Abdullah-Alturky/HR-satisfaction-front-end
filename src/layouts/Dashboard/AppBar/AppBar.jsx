import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import { StyledAppBar, AllTimeText } from "./AppBar.styled";
import { Box, Button } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useThemeMode } from "../../../contexts/ThemeModeProvider";

const AppBar = ({ open, handleDrawerToggle, drawerWidth }) => {
  const { toggleTheme } = useThemeMode();
  return (
    <StyledAppBar position="fixed" open={open} drawerWidth={drawerWidth}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          sx={{ mr: 2 }}
        >
          <ViewSidebarIcon />
        </IconButton>
        <Box
          sx={{ color: "common.black", display: "flex", alignItems: "center" }}
        >
          <AllTimeText>Dashboard</AllTimeText>
        </Box>
        <Box
          sx={{
            color: "common.black",
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <Button variant="text" color="inherit" onClick={toggleTheme}>
            <Brightness4Icon />
          </Button>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBar;
