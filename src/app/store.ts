import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/Authentication/authSlice';
import candidateReducer from '../features/Candidate/candidateSlice';
import hrReducer from '../features/Hr/hr.Slice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    candidate: candidateReducer,
    hr: hrReducer,
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
