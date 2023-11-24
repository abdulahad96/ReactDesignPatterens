import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email:'',
  password:''
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state,action) => {
   console.log(action.payload)
      state.email= action.payload.email
      state.password= action.payload.password
    },
    logout: (state) => {
      state.email = ''
      state.password=''
    },
 
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, } = userSlice.actions

export default userSlice.reducer