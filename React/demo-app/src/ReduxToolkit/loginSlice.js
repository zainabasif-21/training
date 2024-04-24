import { createSlice } from '@reduxjs/toolkit';


const initialState= {
    isLogged: false,
    user:'',
    password:'',
    type:''
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLogged=true;
      state.user=action.payload.email;
      state.password=action.payload.password;
      state.type=action.payload.email.includes('user')? 'user': 'admin';
      
    },
    logout: (state) => {
      state.isLogged=false;
      state.user='';
      state.password='';
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions

export default loginSlice.reducer