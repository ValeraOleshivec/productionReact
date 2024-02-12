import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { componentRender } from 'shared/config/tests/componentRender';

describe('sidebar', () => {
    test('Test render', () => {
        componentRender(<Sidebar />);
        expect(
            screen.getByTestId('sidebar'),
        ).toBeInTheDocument();
    });
    test('toggle', () => {
        componentRender(<Sidebar />);
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
