import React from "react";
import styled from "@emotion/styled";

export interface IButton {
    /** The text to be displayed inside the button. */
    text: string,
}

const Wrapper = styled.button`
  letter-spacing: 1px;
  background: #1d5ae0;
  color: whitesmoke;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
`;

const Button = ({ text }: IButton) => (
    <Wrapper>{text}</Wrapper>
)

export default Button