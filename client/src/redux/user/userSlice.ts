import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, logout } from '../services/endpoints/users';
import { UserStateType, UserType } from './types';

const initialState: UserStateType = {
  user: {
    name: localStorage.getItem('user') || '',
    email: '',
    password: '',
  },
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action: PayloadAction<UserType>) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', String(state.isLoggedIn));
        localStorage.setItem('user', state.user.name);
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          name: '',
          email: '',
          password: '',
        };
        state.isLoggedIn = false;
        localStorage.setItem('isLoggedIn', String(state.isLoggedIn));
        localStorage.setItem('user', state.user.name);
      });
  },
});

export default userSlice.reducer;
