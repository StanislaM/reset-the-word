import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type TMaxLength = 6 | 7 | 8;
export type TMinLength = 4 | 5 | 6;
export type TTime = 1 | 2 | 5;

interface ISettingsState {
    maxLength: TMaxLength;
    minLength: TMinLength;
    time: TTime;
}

const initialState: ISettingsState = {
    maxLength: 8,
    minLength: 5,
    time: 2,
};

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setMaxLength: (state, action: PayloadAction<TMaxLength>) => {
            state.maxLength = action.payload;
        },
        setMinLength: (state, action: PayloadAction<TMinLength>) => {
            state.minLength = action.payload;
        },
        setTime: (state, action: PayloadAction<TTime>) => {
            state.time = action.payload;
        },
    },
});

export const { setMaxLength, setMinLength, setTime } = settingsSlice.actions;
export default settingsSlice.reducer;
