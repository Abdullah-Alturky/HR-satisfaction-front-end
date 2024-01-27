/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  AllInputsContainer,
  Container,
  Header,
  InputContainer,
} from "./EmpInfo.styled";

import DropDown from "../../../components/Stepper/DropDown/DropDown";
import MyTextField from "../../../components/Stepper/TextField/TextField";
import { useState } from "react";

const EmpInfo = ({
  name,
  setName,
  dep,
  setDep,
  geo,
  setGeo,
  role,
  setRole,
  gender,
  setGender,
  salary,
  setSalary,
  title,
  setTitle
}) => {
  const [depItems, setDepItems] = useState([
    "Operations",
    "IT",
    "Warehouse",
    "Human Resources",
    "Support",
    "Sales",
    "Finance",
  ]);

  const [geoItems, setGeoItems] = useState([
    "France",
    "UK",
    "Australia",
    "Turkey",
    "Japan",
    "US",
    "Korea",
    "Colombia",
    "China",
  ]);

  const [roleItems, setRoleItems] = useState([
    "Senior Director",
    "Manager",
    "VP",
    "Level 2-4",
    "Level 1",
    "Director",
    "Senior Manager",
  ]);

  const [genderItems, setGenderItems] = useState(["M", "F"]);
  const [salaryItems, setSalayItems] = useState(["low", "medium", "high"]);

  const [titleItems, setTitleItems] = useState([
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
      <Header>General Information</Header>
      <AllInputsContainer>
        <InputContainer>
          {" "}
          <MyTextField
            value={name}
            setValue={setName}
            label={"Name"}
            placeHolder={"Name"}
            border={true}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            value={gender}
            setValue={setGender}
            label={"Gender"}
            placeHolder={"Gender"}
            border={true}
            items={genderItems}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            value={dep}
            setValue={setDep}
            label={"Department"}
            placeHolder={"Department"}
            border={true}
            items={depItems}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            value={geo}
            setValue={setGeo}
            label={"GEO"}
            placeHolder={"GEO"}
            border={true}
            items={geoItems}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            value={role}
            setValue={setRole}
            label={"Role"}
            placeHolder={"Role"}
            border={true}
            items={roleItems}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            value={salary}
            setValue={setSalary}
            label={"Salary"}
            placeHolder={"Salary"}
            border={true}
            items={salaryItems}
          />
        </InputContainer>
        <InputContainer>
          <DropDown
            value={title}
            setValue={setTitle}
            label={"Title"}
            placeHolder={"Title"}
            border={true}
            items={titleItems}
          />
        </InputContainer>
      </AllInputsContainer>
    </Container>
  );
};

export default EmpInfo;
