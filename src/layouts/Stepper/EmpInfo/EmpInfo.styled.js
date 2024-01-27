/* eslint-disable no-unused-vars */
import styled from "@mui/material/styles/styled";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  //   width: "100%",
  minHeight: "100%",
  color: "black",

  padding: "5px",

  borderTop: "1px solid #eee",
  marginTop: "10px",

  "@media screen and (max-width: 768px)": {},
}));

export const InputContainer = styled(Box)(({ theme }) => ({
  width: "24%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media screen and (max-width: 768px)": {},
}));

export const AllInputsContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "start",
  flexWrap: "wrap",
  gap: "7px",
  "@media screen and (max-width: 768px)": {},
}));

export const Header = styled(Typography)(({ theme }) => ({
  width: "100%",
  textAlign: "start",
  fontSize: "1.4rem",
  fontWeight: "bold",
  color: "#666666",
  "@media screen and (max-width: 768px)": {},
}));
