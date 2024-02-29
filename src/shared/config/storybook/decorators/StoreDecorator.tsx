import {
    StateSchema,
    StoreProvider,
} from 'app/Providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';

const defaultAsyncReducers: DeepPartial<
    ReducersMapObject<StateSchema>
> = {
    loginForm: loginReducer,
};
export const StoreDecorator =
    (state: DeepPartial<StateSchema>) => (StoryComponent: any) => (
        <StoreProvider
            initialState={state as StateSchema}
            asyncReducers={defaultAsyncReducers}
        >
            <StoryComponent />
        </StoreProvider>
    );
