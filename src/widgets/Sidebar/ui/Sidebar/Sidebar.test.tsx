import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { renderWithRouter } from 'shared/config/tests/renderWithRouter';

describe('sidebar', () => {
    test('Test render', () => {
        renderWithRouter(<Sidebar />);
        expect(
            screen.getByTestId('sidebar'),
        ).toBeInTheDocument();
    });
    test('toggle', () => {
        renderWithRouter(<Sidebar />);
        const toggleBtn =
            screen.getByTestId('sidebarButton');
        expect(
            screen.getByTestId('sidebar'),
        ).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass(
            'collapsed',
        );
    });
});
