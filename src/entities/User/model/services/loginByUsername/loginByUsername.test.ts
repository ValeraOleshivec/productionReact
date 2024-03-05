import axios from 'axios';
import { loginByUsername } from 'entities/User/model/services/loginByUsername/loginByUsername';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/Providers/StoreProvider';
import { userActions } from 'entities/User';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);
describe('loginByUsername.test', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    //
    // test('success', async () => {
    //     const userValue = { username: '123', id: '1' };
    //     mockedAxios.post.mockReturnValue(
    //         Promise.resolve({ data: userValue }),
    //     );
    //     const action = loginByUsername({
    //         username: '123',
    //         password: '123',
    //     });
    //     const result = await action(dispatch, getState, undefined);
    //     expect(dispatch).toHaveBeenCalledWith(
    //         userActions.setAuthData({ username: '123', id: '1' }),
    //     );
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    // });
    // test('403 forbidden', async () => {
    //     mockedAxios.post.mockReturnValue(
    //         Promise.resolve({ status: 403 }),
    //     );
    //     const action = loginByUsername({
    //         username: '123',
    //         password: '123',
    //     });
    //     const result = await action(dispatch, getState, undefined);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(result.meta.requestStatus).toBe('rejected');
    // });
});
