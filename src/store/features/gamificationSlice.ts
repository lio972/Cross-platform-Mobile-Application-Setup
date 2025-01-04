import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
    import { api } from '../../services/api';

    interface GamificationState {
      points: number;
      level: number;
      badges: string[];
      completedTasks: string[];
    }

    const initialState: GamificationState = {
      points: 0,
      level: 1,
      badges: [],
      completedTasks: [],
    };

    export const completeTask = createAsyncThunk(
      'gamification/completeTask',
      async (taskId: string) => {
        const response = await api.completeTask(taskId);
        return response;
      }
    );

    const gamificationSlice = createSlice({
      name: 'gamification',
      initialState,
      reducers: {
        addPoints(state, action: PayloadAction<number>) {
          state.points += action.payload;
        },
        addBadge(state, action: PayloadAction<string>) {
          state.badges.push(action.payload);
        },
      },
      extraReducers: (builder) => {
        builder.addCase(completeTask.fulfilled, (state, action) => {
          state.points += action.payload.points;
          state.completedTasks.push(action.meta.arg);
        });
      },
    });

    export const { addPoints, addBadge } = gamificationSlice.actions;
    export default gamificationSlice.reducer;
