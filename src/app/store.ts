import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/Authentication/authSlice';
import candidateReducer from '../features/Candidate/candidateSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    candidate: candidateReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
