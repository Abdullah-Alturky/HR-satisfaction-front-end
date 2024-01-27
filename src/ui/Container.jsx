import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  padding: "0 1rem",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.grey[100],
}));
