/* eslint-disable no-unused-vars */
import styled from "@mui/material/styles/styled";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100%",
  color: "black",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[900]
      : theme.palette.common.white,
  // height: "70vh",
  "@media screen and (max-width: 768px)": {},
}));
