import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { fireEvent, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter test', () => {
    test('test Sidebar render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('test toggle increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const toggleBtn = screen.getByTestId('increment-button');
        expect(screen.getByTestId('value-title')).toBeInTheDocument();
        userEvent.click(toggleBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('test toggle decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const toggleBtn = screen.getByTestId('decrement-button');
        expect(screen.getByTestId('value-title')).toBeInTheDocument();
        userEvent.click(toggleBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
