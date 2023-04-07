import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollPositionSchema } from '../types/scrollPositionSchema';

const initialState: ScrollPositionSchema = {
    scrollPosition: {},
};

export const scrollPositionSlice = createSlice({
    name: 'scrollPosition',
    initialState,
    reducers: {
        setScroll: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
            state.scrollPosition[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollPositionActions } = scrollPositionSlice;
export const { reducer: scrollPositionReducer } = scrollPositionSlice;
