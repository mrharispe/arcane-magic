import React from "react";
import styled from "@emotion/styled";

export interface IButton {
    /** The text to be displayed inside the button. */
    text: string,

    /** Function to be called when the button is clicked. */
    onClick: () => void
}

const Wrapper = styled.button`
  letter-spacing: 1px;
  background: #2b61c4;
  color: whitesmoke;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
`;

const Button = (props: IButton) => (
    <Wrapper onClick={props.onClick}>{props.text}</Wrapper>
)

export default Button