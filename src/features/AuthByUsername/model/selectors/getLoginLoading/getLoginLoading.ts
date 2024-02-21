import { StateSchema } from 'app/Providers/StoreProvider';

export const getLoginLoading = (state: StateSchema) =>
    state?.loginForm?.isLoading || false;
