import { createSlice } from '@reduxjs/toolkit';
import { loginByUsername } from 'entities/User/model/services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: '',
    error: undefined,
};
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            loginByUsername.pending,
            (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            },
        );
        builder.addCase(
            loginByUsername.fulfilled,
            (state, action) => {
                state.isLoading = false;
            },
        );
        builder.addCase(
            loginByUsername.rejected,
            (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            },
        );
    },
});

export const { actions: loginActions } = loginSlice;

export const { reducer: loginReducer } = loginSlice;
