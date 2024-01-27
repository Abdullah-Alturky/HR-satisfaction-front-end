import { Outlet } from "react-router-dom";
import { StyledMain } from "./Main.styled";

const Main = ({ open, drawerWidth }) => {
  return (
    <StyledMain open={open} drawerWidth={drawerWidth}>
      <Outlet />
    </StyledMain>
  );
};

export default Main;
