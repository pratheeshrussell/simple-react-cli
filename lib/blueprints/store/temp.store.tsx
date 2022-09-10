import { configureStore } from '@reduxjs/toolkit';

const {{(name + ' ' + postfix) | PascalCase }} = configureStore({

    reducer: {
        // Reducers from other slices and Api's
        // auth:authReducer,
        // [AuthApi.reducerPath]:AuthApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(
        // Concat middlewares from api
        // AuthApi.middleware,
    ),
});

export type {{(name + ' ' + postfix) | PascalCase }}State = ReturnType<typeof {{(name + ' ' + postfix) | PascalCase }}.getState>
export default {{(name + ' ' + postfix) | PascalCase }};