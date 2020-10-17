import React from "react";

export interface IButton {
    /** The text to be displayed inside the button. */
    text: string,
}

const Button = ({ text }: IButton) => (
    <button>{text}</button>
)

export default Button