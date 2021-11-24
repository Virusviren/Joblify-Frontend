import { createSlice } from '@reduxjs/toolkit';

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

export default authSlice.reducer;
