import { render, getByText, fireEvent } from '@testing-library/react';
import React from 'react';
import Button from './Button';
import { Element } from '../../element.ts';

describe('Button', () => {
    test('should have a label', () => {
        const { container } = render(<Button text="Greetings!" />);

        getByText(container, 'Greetings!');
    });

    test('should be clickable', () => {
        const onClickMock = jest.fn();
        const { container } = render(
            <Button text="Am I clickable?" onClick={onClickMock} />
        );
        const component = container.firstChild;

        fireEvent.click(component);

        expect(onClickMock).toBeCalled();
    });
});
