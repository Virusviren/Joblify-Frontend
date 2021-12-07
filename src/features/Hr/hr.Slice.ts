import { createSlice } from '@reduxjs/toolkit';
import { IappliedJobsApplications } from '../../typings/appliedJobsApplications';
import { Ihrinfo } from '../../typings/hr';
import { IJobs } from '../../typings/jobs';

interface IHRSTORE {
  hrInfo: Ihrinfo;
  applicationsList: IappliedJobsApplications[];
  jobList: IJobs[];
}

const initialState: IHRSTORE = {
  hrInfo: {},
  applicationsList: [],
  jobList: [],
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
    getJobList: (state, action) => {
      return { ...state, jobList: action.payload };
    },
  },
});

export const { getHr, getApplicationsList, getJobList } = hrSlice.actions;

export default hrSlice.reducer;
