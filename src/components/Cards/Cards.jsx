import { IconGradientCard } from "./IconCards";
import stock from "../../assets/images/stock.png";

import { IconCard } from "./IconCards";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";

const StyledCard = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: theme.spacing(2),
  borderRadius: "1rem",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  height: "100%",
}));

const StyledNoPadCard = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  borderRadius: "1rem",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  overflow: "hidden",
  height: "100%",
  flexGrow: 1,
}));

const Card = ({ children, props }) => {
  return (
    <StyledCard {...props} elevation={7}>
      {children}
    </StyledCard>
  );
};

const NoPadCard = ({ children }) => {
  return <StyledNoPadCard elevation={7}>{children}</StyledNoPadCard>;
};

const WalletCard = ({ text, sub, icon }) => {
  return (
    <NoPadCard>
      <IconGradientCard Icon={icon} text={text} sub={sub} />
    </NoPadCard>
  );
};

const StocksCard = ({ text }) => {
  return (
    <NoPadCard>
      <IconCard Icon={stock} text={text} sub="Stocks" />
    </NoPadCard>
  );
};

export { WalletCard, StocksCard };
