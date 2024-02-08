import { Theme } from 'app/Providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
