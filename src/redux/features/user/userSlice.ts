import { createSlice } from '@reduxjs/toolkit';
import { user } from 'data/userProfile';

export const userSlice = createSlice({
  name: 'user',
  initialState: user,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { saveUserProfile } = userSlice.actions;

export default userSlice.reducer;
