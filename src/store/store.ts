import { configureStore } from '@reduxjs/toolkit';
    import authReducer from './features/authSlice';
    import gamificationReducer from './features/gamificationSlice';

    export const store = configureStore({
      reducer: {
        auth: authReducer,
        gamification: gamificationReducer,
      },
    });

    export type RootState = ReturnType<typeof store.getState>;
    export type AppDispatch = typeof store.dispatch;
