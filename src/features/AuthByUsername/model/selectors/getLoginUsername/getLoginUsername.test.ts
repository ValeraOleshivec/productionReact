import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/Providers/StoreProvider';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'NFMb0b',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual(
            'NFMb0b',
        );
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual(
            undefined,
        );
    });
});
