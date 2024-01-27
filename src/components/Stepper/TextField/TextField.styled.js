/* eslint-disable no-unused-vars */
import { styled, alpha } from "@mui/system";
import { Autocomplete, TextField, Typography, Box } from "@mui/material";
// import theme from "../../../theme/theme"

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: ${(p) => (p.isSplitted ? "49%" : "100%")};
  align-self: stretch;
  input {
    height: 2.2rem;

    // width: 100%;
    border-radius: ${(p) => (p.isSplitted ? "6px" : "6px")};

    // background-color: ${(p) => (p.login ? " #eee" : "white")};
    margin: ${(p) => (p.login ? " 5px 0" : "0")};
    // color: black;
    outline: none;
    border: 1px solid;
    outline: none;
    border-color: ${(p) => (p.border) ? "#eee" : "transparent"};
    padding: 0 0 0 5px;
  }

  margin: 10px auto;

  @media (max-width: 900px) {
  }
`;

// export const MyLabel = styled(Typography)`
//   color: ${({ color }) =>
//     color === "dark" ? "black" : color};
//   font-size: 0.7rem;
//   text-align: start;

//   @media (max-width: 900px) {
//   }
// `;


export const MyLabel = styled(Typography)(({ theme }) => ({
  textAlign: "start",
  // color: black;

  fontSize: "0.7rem",
  // color: theme.palette.common.black,
  color: 'gray',
}));
