import { createSlice } from '@reduxjs/toolkit';
import { IappliedJobsApplications } from '../../typings/appliedJobsApplications';
import { Icandidateinfo } from '../../typings/candidate';

// InterFaces

interface ICANDIDATESTORE {
  candidateInfo: Icandidateinfo;
  appliedJobsApplications: IappliedJobsApplications[];
}
const initialState: ICANDIDATESTORE = {
  candidateInfo: {},
  appliedJobsApplications: [],
};

// UserSlice
export const candidateSlice = createSlice({
  name: 'candidate',
  initialState,

  reducers: {
    getCandidate: (state, action) => {
      return {
        ...state,
        candidateInfo: action.payload,
      };
    },
    getAllApplications: (state, action) => {
      return {
        ...state,
        appliedJobsApplications: action.payload,
      };
    },
    deleteApplication: (state, action) => {
      return {
        ...state,
        appliedJobsApplications: action.payload,
      };
    },
  },
});

export const { getCandidate, getAllApplications, deleteApplication } =
  candidateSlice.actions;

export default candidateSlice.reducer;
