import {
    Theme,
    ThemeProvider,
} from 'app/Providers/ThemeProvider';

export const ThemeDecorator =
    (theme: Theme) => (StoryComponent: any) => (
        <ThemeProvider>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
