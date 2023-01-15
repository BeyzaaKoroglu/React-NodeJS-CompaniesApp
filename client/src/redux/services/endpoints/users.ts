import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserFormValues } from '../../../components/LoginRegisterForm/LoginRegisterForm.types';
import instance from '../instance';

export const register = createAsyncThunk(
  'user/register',
  async (user: UserFormValues) => {
    await instance.post('/users/register', user);
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (user: UserFormValues) => {
    const res = await instance.post('/users/login', user);
    return res.data.user;
  }
);

export const logout = createAsyncThunk('user/logout', async () => {
  await instance.get('/users/logout');
});
