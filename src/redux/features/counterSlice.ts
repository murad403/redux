import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
    count: number;
}

const initialState: TInitialState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increament: (state) =>{
            state.count += 1;
        },
        decreament: (state) =>{
            state.count -= 1;
        },
        increamentByValue: (state, action: PayloadAction<number>) =>{
            state.count += action.payload;
        }
    }
})

export const {increament, decreament, increamentByValue} = counterSlice.actions;

export default counterSlice.reducer;