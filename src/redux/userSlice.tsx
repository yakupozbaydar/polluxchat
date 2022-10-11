import { createSlice } from '@reduxjs/toolkit'

export type initalProps = {
  user:{
    email:string | null,
    uid:string | null,
    photoURL:string | null,
    isOnline:boolean | null,
  },
  pending:boolean,
  error:boolean,
}

const initialState:initalProps = {
  user: {
    email: null,
    uid: null,
    photoURL: null,
    isOnline:null,
  },
  pending: false,
  error: false,
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    pendingStart:(state) => {
      state.pending=true
    },
    pendingEndWithAlert:(state,action) => {
      state.pending=false
      alert(action.payload)
    },
    pendingEnd:(state) => {
      state.pending=false
    },
    setActiveUser: (state, action) => {
      state.user.email = action.payload.email
      state.user.uid = action.payload.uid
      state.user.photoURL = action.payload.photoURL
      state.pending=false
      state.user.isOnline=true
    },
    setUserLogout: state => {
      state.user.email =null 
      state.user.uid =null
      state.user.photoURL =null
      state.user.isOnline=false
    },
  }
});

export const { pendingStart,pendingEnd,pendingEndWithAlert,setActiveUser, setUserLogout } = userSlice.actions
export default userSlice.reducer