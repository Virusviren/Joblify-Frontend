import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IappliedJobsApplications } from '../../typings/appliedJobsApplications';
import { Ihrinfo } from '../../typings/hr';

interface IHRSTORE {
  hrInfo: Ihrinfo;
  applicationsList: IappliedJobsApplications[];
}

const initialState: IHRSTORE = {
  hrInfo: {},
  applicationsList: [],
};

export const hrSlice = createSlice({
  name: 'hr',
  initialState,

  reducers: {
    getHr: (state, action) => {
      return {
        ...state,
        hrInfo: action.payload,
      };
    },
    getApplicationsList: (state, action) => {
      return {
        ...state,
        applicationsList: action.payload,
      };
    },
  },
});

export const { getHr, getApplicationsList } = hrSlice.actions;

export default hrSlice.reducer;
