import React from "react";
import styled from "styled-components";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 40%;
  min-height: 48px;
  font-size: 16px;
  padding: 6px 8px 6px 15px;
  border: 1px solid black;
  border-radius: 8px;
  overflow: hidden;
  background: #1C1C1C;
  height: 56px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  border: black;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: inherit;
  background: #1C1C1C;
  
`;

export interface Props {
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  buttonOnly?: boolean;
  value?: any;
  onClick? : any;
  InputProps?: any;
}

const CustomInput = React.forwardRef<HTMLElement, Props>(
  ({ value, onClick, disabled, readOnly, buttonOnly, ...props }, ref) => {
    return (
      <InputWrapper {...props}>
        <Input value={value} onClick={onClick} placeholder="기간을 선택해주세요"></Input>
        {props.InputProps ? (
          props.InputProps.endAdornment
        ) : (
          <CalendarTodayIcon onClick={onClick} />
        )}
      </InputWrapper>
    );
  }
);

CustomInput.displayName = "CustomInput";
export default CustomInput;
