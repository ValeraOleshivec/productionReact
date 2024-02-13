import {
    Theme,
    ThemeProvider,
} from 'app/Providers/ThemeProvider';

export const ThemeDecorator =
    (theme: Theme) => (StoryComponent: any) => {
        document.body.className = theme;
        return (
            <ThemeProvider>
                <div className={`app ${theme}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        );
    };
