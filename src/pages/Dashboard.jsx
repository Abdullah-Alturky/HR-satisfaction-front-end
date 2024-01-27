import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "../layouts/Dashboard/AppBar/AppBar";
import MyDrawer from "../layouts/Dashboard/Drawer/Drawer";
import Main from "../layouts/Dashboard/Main/Main";

const drawerWidth = 240;
const drawerWidthForMain = 260
export default function Dashboard() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {
        <Box
          sx={{
            display: "flex",
          }}
        >
          <AppBar
            open={open}
            handleDrawerToggle={handleDrawerToggle}
            drawerWidth={drawerWidth}
          />
          <MyDrawer drawerWidth={drawerWidth} open={open} />
          <Main open={open} drawerWidth={drawerWidthForMain} />
        </Box>
      }
    </>
  );
}
