// web-manufacture-app/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';  // Import userSlice

// Konfigurasi store Redux dengan userReducer
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
