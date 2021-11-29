import { configureStore, ThunkAction, Action, createSlice } from '@reduxjs/toolkit';

interface FocusWordsState {
  focusWords: string[]
};
const initialState: FocusWordsState = {
  focusWords: [],
};
interface PayloadAction<Type> {
  payload: Type;
}
const focusWordsSlice = createSlice({
  name: 'focuswords',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.focusWords = [...state.focusWords, action.payload]
    }
  }
})

export const store = configureStore({
  reducer: {
    focusWords: focusWordsSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
