import { createSlice } from '@reduxjs/toolkit';
import { JobList } from 'screens/JobSearch/types';

interface JobState {
  savedJobs: JobList[];
  appliedJobs: JobList[];
}

const initialState: JobState = {
  savedJobs: [],
  appliedJobs: [],
};

export const jobSlice = createSlice({
  name: 'Jobs',
  initialState,
  reducers: {
    saveOrRemoveJobs: (state, action) => {
      if (state.savedJobs.some(job => job.id === action.payload.id)) {
        const newArr = state.savedJobs.filter(
          job => job.id !== action.payload.id,
        );
        state.savedJobs = newArr;
        return;
      }
      state.savedJobs.push(action.payload);
    },
    saveAppliedJobs: (state, action) => {
      state.appliedJobs.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveOrRemoveJobs, saveAppliedJobs } = jobSlice.actions;

export default jobSlice.reducer;
