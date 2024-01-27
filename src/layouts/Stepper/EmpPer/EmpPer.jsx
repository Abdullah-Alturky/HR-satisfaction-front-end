/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  AllInputsContainer,
  Container,
  Header,
  InputContainer,
} from "./EmpPer.styled";

import DropDown from "../../../components/Stepper/DropDown/DropDown";
import MyTextField from "../../../components/Stepper/TextField/TextField";
import { useState } from "react";

const EmpPer = ({
  lastEval,
  setLastEval,
  numberProject,
  setNumberProject,
  averageMonthly,
  setAverageMonthly,
  talentLevel,
  setTalentLevel,
  pormotion,
  setPormotion,
  risingStar,
  setRisingStar,
}) => {
  const [starItems, setStarItems] = useState(["1", "2", "3", "4", "5"]);
  const [pormotionItems, setPormotionItems] = useState(["0", "1"]);

  const [evItems, setEvItems] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ]);

  const [talItems, setTalItems] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ]);

  return (
    <Container>
      <Header>Performance</Header>
      <AllInputsContainer>
        <InputContainer>
          <DropDown
            value={lastEval}
            setValue={setLastEval}
            label={"Last Evaluation"}
            placeHolder={"Last Evaluation"}
            items={evItems}
            border={true}
          />
        </InputContainer>
        {/* <InputContainer>
          <MyTextField
            number={true}
            value={numberProject}
            setValue={setNumberProject}
            label={"Number Project"}
            placeHolder={"Ex: 5"}
            border={true}
          />
        </InputContainer> */}
        {/* <InputContainer>
          <MyTextField
            number={true}
            value={averageMonthly}
            setValue={setAverageMonthly}
            label={"Average Monthly Hours"}
            placeHolder={"Ex: 5"}
            border={true}
          />
        </InputContainer> */}
        <InputContainer>
          <DropDown
            items={talItems}
            value={talentLevel}
            setValue={setTalentLevel}
            label={"Talent Level"}
            placeHolder={"Talent Level"}
            border={true}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            value={pormotion}
            setValue={setPormotion}
            label={"promotion_last_5years"}
            placeHolder={"promotion"}
            items={pormotionItems}
            border={true}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            value={risingStar}
            setValue={setRisingStar}
            label={"Rising Star"}
            placeHolder={"Rising Star"}
            items={starItems}
            border={true}
          />
        </InputContainer>
      </AllInputsContainer>
    </Container>
  );
};

export default EmpPer;
