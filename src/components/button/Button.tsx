import React from 'react';
import styled from 'styled-components';
import { Element } from '../../element';
import { ButtonBending } from './types/button-bending';
import { ButtonShape } from './types/button-shape';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    baseButton,
    buttonCircle,
    buttonCircleNoText,
    buttonRounded,
} from './Button.styles';

export interface IButton {
    /**
     * Defines the text within the button
     */
    text?: string;

    /**
     * Defines the variant
     * @default ButtonBending.Solid
     */
    bending: ButtonBending;

    /**
     * Defines the shape
     * @default ButtonShape.Round
     */
    shape: ButtonShape;

    /**
     * Defines the color
     * @default Element.Water
     */
    element: Element;

    /**
     * Defines the color
     */
    icon?: typeof FontAwesomeIcon;

    /**
     * Defines the action when clicked
     */
    onClick: () => void;
}

const Icon = styled.span<{ hasText: boolean }>`
    ${props => {
        if (props.hasText) {
            return `padding-right: 8px`;
        } else {
            return `
                width: 36px;
                height: 36px;
                padding-right: 0;
            `;
        }
    }}
`;

const Wrapper = styled.button<IButton>`
    ${baseButton}
    ${props => {
        if (props.shape === ButtonShape.Circle) {
            return props.text ? buttonCircle : buttonCircleNoText;
        } else if (props.shape === ButtonShape.Round) {
            return buttonRounded;
        }
    }}

    border: ${props => {
        if (props.bending === ButtonBending.Shallow) {
            return `2px solid ${props.element}`;
        } else {
            return 'none';
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

    box-shadow: ${props =>
        props.bending === ButtonBending.Bare
            ? 'none'
            : '-2px 2px 2px rgba(0, 0, 0, 0.145)'};

    :hover {
        background: ${props =>
                props.element +
                (props.bending === ButtonBending.Solid ? 'AA' : '40')}
            radial-gradient(
                circle,
                transparent 1%,
                ${props => props.element + '60'} 1%
            )
            center/15000%;
    }

    :focus {
        background: ${props =>
                props.element +
                (props.bending === ButtonBending.Solid ? 'CC' : '40')}
            radial-gradient(
                circle,
                transparent 1%,
                ${props => props.element + '60'} 1%
            )
            center/15000%;
    }

    :active {
        background-color: ${props =>
            props.element +
            (props.bending === ButtonBending.Solid ? '99' : '10')};
        background-size: 100%;
        transition: background 0s;
    }
`;

const Button: React.FC<IButton> = (props: IButton) => {
    const styledComponentProps = { ...props };
    styledComponentProps.bending = props.bending ?? ButtonBending.Solid;
    styledComponentProps.element = props.element ?? Element.Water;

    return (
        <Wrapper {...styledComponentProps}>
            {props.icon && <Icon hasText={!!props.text}>{props.icon}</Icon>}
            {props.text}
        </Wrapper>
    );
};

export default Button;
