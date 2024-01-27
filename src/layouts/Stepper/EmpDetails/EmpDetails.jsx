/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  AllInputsContainer,
  Container,
  Header,
  InputContainer,
} from "./EmpDetails.styled";

import DropDown from "../../../components/Stepper/DropDown/DropDown";
import MyTextField from "../../../components/Stepper/TextField/TextField";
import { useState } from "react";

const EmpDetails = ({
  timeSpend,
  setTimeSpend,
  empEng,
  setEmpEng,
  empWorkStatus2,
  setEmpWorkStatus2,
  empIdentity,
  setEmpIdentity,
  empRole,
  setEmpRole,
  empPosition,
  setEmpPosition,
}) => {
  const [roleItems, setRoleItems] = useState([
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
  const [positionItems, setPositionItems] = useState([
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
  const [statusItems, setStatusItems] = useState([
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
  const [identityItems, setIdentityItems] = useState([
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

  const [engItems, setEngItems] = useState(["1", "2", "3", "4", "5"]);

  return (
    <Container>
      <Header>Employment Details</Header>
      <AllInputsContainer>
        <InputContainer>
          <MyTextField
            number={true}
            value={timeSpend}
            setValue={setTimeSpend}
            label={"time_spend_company"}
            placeHolder={"Ex: 5"}
            border={true}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            number={true}
            value={empEng}
            setValue={setEmpEng}
            label={"EMP_Engagement_1"}
            placeHolder={"EMP_Engagement_1"}
            border={true}
            items={engItems}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            number={true}
            value={empWorkStatus2}
            setValue={setEmpWorkStatus2}
            label={"Emp_Work_Status2"}
            placeHolder={"Emp_Work_Status2"}
            border={true}
            items={statusItems}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            number={true}
            value={empIdentity}
            setValue={setEmpIdentity}
            label={"EMP_Identity"}
            placeHolder={"EMP_Identity"}
            border={true}
            items={identityItems}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            value={empRole}
            setValue={setEmpRole}
            label={"Emp Role"}
            placeHolder={"Role"}
            items={roleItems}
            border={true}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            value={empPosition}
            setValue={setEmpPosition}
            label={"Emp Position"}
            placeHolder={"Position"}
            items={positionItems}
            border={true}
          />
        </InputContainer>
      </AllInputsContainer>
    </Container>
  );
};

export default EmpDetails;
