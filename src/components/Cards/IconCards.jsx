import { useTheme } from "@emotion/react";
import { Box, Typography, Avatar, Grid } from "@mui/material";
import styled from "@mui/material/styles/styled";

const StyledBox = styled(Grid)(({ theme, isGradient }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  padding: theme.spacing(2),
  // maxHeight: "10rem",
  backgroundImage: isGradient
    ? `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`
    : "none",
  color: isGradient ? theme.palette.common.white : theme.palette.common.black,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  backgroundColor: "transparent",
}));

const BoxItem = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  flexDirection: "column",
  padding: theme.spacing(1),
  flex: 1,
}));

const IconCard = ({ Icon, text, sub }) => {
  return (
    <StyledBox>
      <StyledAvatar variant="rounded" alt="Wallet" src={Icon} />
      <BoxItem>
        <Typography>{sub}</Typography>
        <Typography variant="h3">{text}</Typography>
      </BoxItem>
    </StyledBox>
  );
};

const IconGradientCard = ({ Icon, text, sub }) => {
  const theme = useTheme();
  return (
    <StyledBox isGradient>
      <StyledAvatar variant="rounded" alt="Wallet">
        {Icon}
      </StyledAvatar>
      <BoxItem>
        <Typography
          sx={{
            color:
              theme.palette.mode === "dark"
                ? theme.palette.grey[900]
                : theme.palette.common.white,
            wordBreak: "break-word",
          }}
        >
          {sub}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color:
              theme.palette.mode === "dark"
                ? theme.palette.grey[900]
                : theme.palette.common.white,
          }}
        >
          {text}
        </Typography>
      </BoxItem>
    </StyledBox>
  );
};

export { IconCard, IconGradientCard };
