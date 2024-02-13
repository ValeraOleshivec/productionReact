import { screen } from '@testing-library/react';
import { Counter } from 'entities/Counter';
import { componentRender } from 'shared/config/tests/componentRender';
import { userEvent } from '@storybook/test';

describe('Counter', () => {
    test('Test render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(
            screen.getByTestId('countValue'),
        ).toHaveTextContent('10');
    });
    test('decrement', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await userEvent.click(
            screen.getByTestId('decrementBtn'),
        );
        expect(
            screen.getByTestId('countValue'),
        ).toHaveTextContent('9');
    });
    test('increment ', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await userEvent.click(
            screen.getByTestId('incrementBtn'),
        );
        expect(
            screen.getByTestId('countValue'),
        ).toHaveTextContent('11');
    });
});
