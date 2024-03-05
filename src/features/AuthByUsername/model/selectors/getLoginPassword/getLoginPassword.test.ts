import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/Providers/StoreProvider';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '1337LOGAN21',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual(
            '1337LOGAN21',
        );
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual(
            undefined,
        );
    });
});
