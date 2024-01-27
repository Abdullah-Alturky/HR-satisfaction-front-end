/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  AllInputsContainer,
  Container,
  Header,
  InputContainer,
} from "./Other.styled";

import DropDown from "../../../components/Stepper/DropDown/DropDown";
import MyTextField from "../../../components/Stepper/TextField/TextField";
import { useState } from "react";

const Other = ({
  willRelocate,
  setWillRelocate,
  critical,
  setCritical,
  trendingPref,
  setTrendingPref,
  percentRemote,
  setPercentRemote,
  leftCompany,
  setLeftCompany,
  empComp,
  setEmpComp,
}) => {
  const [willRelocateItems, setWillRelocateItems] = useState(["0", "1"]);
  const [criticalItems, setCriticalItems] = useState(["0", "1"]);
  const [leftItems, setLeftItems] = useState(["0", "1"]);

  const [prefItems, setPrefItems] = useState([
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
  const [compItems, setCompItems] = useState([
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
      <Header>Other</Header>
      <AllInputsContainer>
        {/* <InputContainer>
          <DropDown
            value={willRelocate}
            setValue={setWillRelocate}
            label={"Will Relocate"}
            placeHolder={"Will Relocate"}
            items={willRelocateItems}
            border={true}
          />
        </InputContainer> */}
        <InputContainer>
          <DropDown
            value={critical}
            setValue={setCritical}
            label={"Critical"}
            placeHolder={"Critical"}
            items={criticalItems}
            border={true}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            value={trendingPref}
            setValue={setTrendingPref}
            label={"Trending Pref"}
            placeHolder={"Trending Pref"}
            items={prefItems}
            border={true}
          />
        </InputContainer>
        <InputContainer>
          {" "}
          <MyTextField
            value={percentRemote}
            setValue={setPercentRemote}
            label={"Percent Remote"}
            placeHolder={"Percent Remote"}
            border={true}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            value={leftCompany}
            setValue={setLeftCompany}
            label={"Left Company"}
            placeHolder={"Left Company"}
            items={leftItems}
            border={true}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            value={empComp}
            setValue={setEmpComp}
            label={"Emp_Competitive_1"}
            placeHolder={"Competitive"}
            items={compItems}
            border={true}
          />
        </InputContainer>
      </AllInputsContainer>
    </Container>
  );
};

export default Other;
