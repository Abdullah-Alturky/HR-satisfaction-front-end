/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  AllInputsContainer,
  Container,
  Header,
  InputContainer,
} from "./EmpSat.styled";

import DropDown from "../../../components/Stepper/DropDown/DropDown";
import MyTextField from "../../../components/Stepper/TextField/TextField";
import { useState } from "react";

const EmpSat = ({
  empSat,
  setEmpSat,
  empSatPrem1,
  setEmpSatPrem1,
  empSatRemote1,
  setEmpSatRemote1,
  empCol1,
  setEmpCol1,
}) => {
  const [permItems, setPermItems] = useState([
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
  const [remoteItems, setRemoteItems] = useState([
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
  const [colItems, setColItems] = useState([
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
      <Header>Employee Satisfaction</Header>
      <AllInputsContainer>
        {/* <InputContainer>
          <MyTextField
            number={true}
            value={empSat}
            setValue={setEmpSat}
            label={"Emp_Satisfaction"}
            placeHolder={"Ex: 5"}
            border={true}
          />
        </InputContainer> */}
        <InputContainer>
          <DropDown
            number={true}
            value={empSatPrem1}
            setValue={setEmpSatPrem1}
            label={"EMP_Sat_OnPrem_1"}
            placeHolder={"EMP_Sat_OnPrem_1"}
            border={true}
            items={permItems}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            number={true}
            value={empSatRemote1}
            setValue={setEmpSatRemote1}
            label={"EMP_Sat_Remote_1"}
            placeHolder={"EMP_Sat_Remote_1"}
            border={true}
            items={remoteItems}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            number={true}
            value={empCol1}
            setValue={setEmpCol1}
            label={"Emp_Collaborative_1"}
            placeHolder={"Emp_Collaborative_1"}
            border={true}
            items={colItems}
          />
        </InputContainer>
      </AllInputsContainer>
    </Container>
  );
};

export default EmpSat;
