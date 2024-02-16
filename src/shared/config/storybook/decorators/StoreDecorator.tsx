import {
    StateSchema,
    StoreProvider,
} from 'app/Providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator =
    (state: DeepPartial<StateSchema>) => (StoryComponent: any) => (
        <StoreProvider initialState={state as StateSchema}>
            <StoryComponent />
        </StoreProvider>
    );
