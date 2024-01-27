/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";
import {
  AllInputsContainer,
  Container,
  Header,
  Info,
} from "./Recommend.styled";
import { useEffect, useState } from "react";

const Recommend = ({ satisfied, recommend, handleSave, handleCancel }) => {
  const [firstTime, setFirstTime] = useState(true);

  // useEffect(() => {
  //   if (satisfied && firstTime) {
  //     setFirstTime(false);
  //     handleSave();
  //   }
  // }, []);

  return (
    <Container>
      <Header>Recommendation</Header>
      <AllInputsContainer>
        <Info>
          <span>Employee Is {satisfied ? "" : "Not"} Satisfied</span>
        </Info>
        {!satisfied && (
          <Info>
            <span>Recommendation: </span>
            {recommend}
          </Info>
        )}
      </AllInputsContainer>
      {true && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button onClick={handleSave}>Save</Button>
          {/* <Button onClick={handleCancel}>Cancel</Button> */}
        </Box>
      )}
    </Container>
  );
};

export default Recommend;
