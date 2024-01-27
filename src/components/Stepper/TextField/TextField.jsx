/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import { Container, MyLabel } from "./TextField.styled";

const MyTextField = ({
  login,
  label,
  placeHolder,
  value,
  setValue,
  isSplitted,
  right,
  number,
  disabled = false,
  border,
}) => {
  const handleValueChange = (event) => {
    if (number) {
      if (/^\d*$/.test(event.target.value)) {
        if (event.target.value === "" && !login) {
          setValue(undefined);
        } else {
          setValue(event.target.value);
        }
      }
    } else {
      if (event.target.value === "" && !login) {
        setValue(undefined);
      } else {
        setValue(event.target.value);
      }
    }
  };
  return (
    <Container
      login={login}
      isSplitted={isSplitted}
      right={right}
      border={border}
    >
      <MyLabel>{label}</MyLabel>
      {/* <input
        placeholder={placeHolder}
        value={value ? value : ""}
        onChange={handleValueChange}
        disabled={disabled}
        
      /> */}

      <TextField
        placeholder={placeHolder}
        value={value ? value : ""}
        onChange={handleValueChange}
        disabled={disabled}
      />
    </Container>
  );
};

export default MyTextField;
