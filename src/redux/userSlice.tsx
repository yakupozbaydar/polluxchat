import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    email: null,
    photoURL: null,
    uid: null
  },
  pending: false,
  error: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.user = action.payload
    },
    setUserLogout: state => {
      state.user.email =null 
      state.user.uid =null
      state.user.photoURL =null
    }
  }
});

export const { setActiveUser, setUserLogout } = userSlice.actions
export default userSlice.reducer