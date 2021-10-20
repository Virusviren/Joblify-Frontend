import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

import { IJobs } from '../../typings/jobs';

// InterFaces

export interface UserState {
  token: string;
  authenticated: boolean;
}
//Api Calls

const initialState: UserState = {
  token: '',
  authenticated: false,
};

// UserSlice
export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    loginUser: (state, action) => {
      return {
        ...state,
        token: action.payload.token,
        authenticated: true,
      };
    },
  },
});

export const { loginUser } = authSlice.actions;

export const selectCount = (state: RootState) => state.auth;

export default authSlice.reducer;
