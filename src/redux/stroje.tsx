import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from "./userSlice"
export const store = configureStore({
  reducer: {
    userSlice: userReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type UserState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type UserDispatch = typeof store.dispatch