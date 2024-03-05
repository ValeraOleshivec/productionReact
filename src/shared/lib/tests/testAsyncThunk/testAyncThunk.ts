import { StateSchema } from 'app/Providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;
export class TestAyncThunk<Return, Arg, RejectedValue> {
    dispacth: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor(
        actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    ) {
        this.actionCreator = actionCreator;
        this.dispacth = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(
            this.dispacth,
            this.getState,
            undefined,
        );
        return result;
    }
}
