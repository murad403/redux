import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
    count: number;
    counterBox: number;
}

const initialState: TInitialState = {
    count: 0,
    counterBox: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increament: (state) =>{
            state.count += 1;
            state.counterBox = state.count / 5;
        },
        decreament: (state) =>{
            state.count -= 1;
            state.counterBox = state.count / 5;
        },
        increamentByValue: (state, action: PayloadAction<number>) =>{
            state.count += action.payload;
            state.counterBox = state.count / 5;
        }
    }
})

export const {increament, decreament, increamentByValue} = counterSlice.actions;

export default counterSlice.reducer;