import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
    import { api } from '../../services/api';

    interface User {
      id: string;
      name: string;
      email: string;
      points: number;
    }

    interface AuthState {
      isAuthenticated: boolean;
      user: User | null;
      status: 'idle' | 'loading' | 'succeeded' | 'failed';
      error: string | null;
    }

    const initialState: AuthState = {
      isAuthenticated: false,
      user: null,
      status: 'idle',
      error: null,
    };

    export const loginUser = createAsyncThunk(
      'auth/login',
      async (credentials: { email: string; password: string }, { rejectWithValue }) => {
        try {
          const response = await api.login(credentials.email, credentials.password);
          return response;
        } catch (error) {
          return rejectWithValue(error.message);
        }
      }
    );

    const authSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {
        logout(state) {
          state.isAuthenticated = false;
          state.user = null;
        },
      },
      extraReducers: (builder) => {
        builder
          .addCase(loginUser.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.isAuthenticated = true;
            state.user = action.payload.user;
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload as string;
          });
      },
    });

    export const { logout } = authSlice.actions;
    export default authSlice.reducer;
