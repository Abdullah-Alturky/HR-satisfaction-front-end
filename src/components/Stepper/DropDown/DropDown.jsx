/* eslint-disable react/prop-types */
import {
  MyAutoComplete,
  MyTextField,
  MyLabel,
  Container,
} from "./DropDown.styled";

const DropDown = ({
  value,
  setValue,
  items,
  label,
  placeHolder,
  isSplitted,
  border,
  disabled = false,
}) => {
  const handleValueChange = (event, newValue) => {
    if (newValue === "") {
      setValue(undefined);
    } else {
      setValue(newValue);
    }
  };

  return (
    <Container isSplitted={isSplitted} border={border}>
      <MyLabel>{label}</MyLabel>
      <MyAutoComplete
        border={border}
        isSplitted={isSplitted}
        disablePortal
        id="combo-box-demo"
        options={items}
        value={value}
        onChange={handleValueChange}
        sx={{ paddingX: 0, paddingY: 0 }}
        disableClearable={true}
        disabled={disabled}
        renderInput={(params) => (
          <MyTextField
            isSplitted={isSplitted}
            placeholder={placeHolder}
            disabled={disabled}
            {...params}
            // label={label}
          />
        )}
      />
    </Container>
  );
};

export default DropDown;
