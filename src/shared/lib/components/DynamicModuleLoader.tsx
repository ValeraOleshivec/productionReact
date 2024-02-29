import React, { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithReducerManager } from 'app/Providers/StoreProvider';
import { StateSchemaKey } from 'app/Providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
};
type ReducersListEntry = [StateSchemaKey, Reducer];
interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (
    props,
) => {
    const { children, removeAfterUnmount, reducers } = props;
    const store = useStore() as ReduxStoreWithReducerManager;
    const dispatch = useDispatch();
    useEffect(() => {
        Object.entries(reducers).forEach(
            ([name, reducer]: ReducersListEntry) => {
                store.reducerManager.add(name, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            },
        );

        return () => {
            if (removeAfterUnmount) {
                Object.keys(reducers).forEach(
                    (name: keyof ReducerList) => {
                        store.reducerManager.remove(name);
                        dispatch({
                            type: `@DESTROY ${name} reducer`,
                        });
                    },
                );
            }
        };
        // eslint-disable-next-line
    }, []);
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
