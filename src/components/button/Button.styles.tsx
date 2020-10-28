import { css } from 'styled-components';
import { Element } from '../../element';

export const baseButton = css`
    letter-spacing: 0.25px;
    height: 36px;
    width: auto;
    border: 2px solid transparent;
    background-color: ${Element.Water}
    color: whitesmoke;
    outline: none;
    border-radius: 4px;
    padding: 8px 16px;
    margin: 4px 8px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.145);
    font-size: 14px;
`;

export const buttonRounded = css`
    border-radius: 40px;
`;

export const buttonCircle = css`
    border-radius: 50%;
`;

export const buttonCircleNoText = css`
    ${buttonCircle}
    width: 36px;
    padding: 0;
`;
