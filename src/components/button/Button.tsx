import React from 'react';
import styled from 'styled-components';
import { Element } from '../../element';

export enum ButtonBending {
    Solid = 'solid',
    Shallow = 'shallow',
    Bare = 'bare',
}

export interface IButton {
    /**
     * Defines the text within the button
     */
    text?: string;

    /**
     * Defines the shape
     * @default ButtonBending.Solid
     */
    bending: ButtonBending;

    /**
     * Defines the color
     * @default Element.Water
     */
    element: Element;

    /**
     * Defines the action when clicked
     */
    onClick: () => void;
}

// border: 2px solid ${props => props.element};

const Wrapper = styled.button<IButton>`
    letter-spacing: 0.25px;
    border: ${props => {
        if (props.bending === ButtonBending.Bare) {
            return '2px solid transparent';
        } else {
            return `2px solid ${props.element}`;
        }
    }};
    background-color: ${props => {
        return props.bending === ButtonBending.Solid
            ? props.element
            : 'transparent';
    }};
    color: ${props => {
        return props.bending === ButtonBending.Solid
            ? 'whitesmoke'
            : props.element;
    }};
    outline: none;
    border-radius: 4px;
    padding: 8px 16px;
    margin: 4px 8px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: ${props =>
        props.bending === ButtonBending.Bare
            ? 'none'
            : '-2px 2px 2px rgba(0, 0, 0, 0.145)'};
    font-size: 14px;
`;

const Button: React.FC<IButton> = (props: IButton) => {
    const styledComponentProps = { ...props };
    styledComponentProps.bending = props.bending ?? ButtonBending.Solid;
    styledComponentProps.element = props.element ?? Element.Water;

    return <Wrapper {...styledComponentProps}>{props.text}</Wrapper>;
};

export default Button;
