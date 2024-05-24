import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@redux/features/user/userSlice';
import jobReducer from '@redux/features/job/jobSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
    job: jobReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
