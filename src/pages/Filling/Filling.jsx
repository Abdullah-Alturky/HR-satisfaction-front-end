import { Paper } from "@mui/material";
import MyStepper from "../../layouts/Stepper/MyStepper/MyStepper";
import { Container } from "./Filling.styled";
import styled from "@emotion/styled";
const StyledCard = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: theme.spacing(2),
  borderRadius: "1rem",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  height: "100%",
  backgroundColor: theme.palette.background.paper,
}));
const Filling = () => {
  return (
    <Container>
      <StyledCard
        sx={{
          width: "100%",
          maxWidth: "100% !important",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MyStepper />
      </StyledCard>
    </Container>
  );
};

export default Filling;
