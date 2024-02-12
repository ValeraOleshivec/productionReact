import { render, screen } from '@testing-library/react';
import { Counter } from 'entities/Counter';
import { componentRender } from 'shared/config/tests/componentRender';

describe('Counter', () => {
    test('Test render', () => {
        componentRender(<Counter />);
        expect(
            screen.getByText('TEST'),
        ).toBeInTheDocument();
    });
});
