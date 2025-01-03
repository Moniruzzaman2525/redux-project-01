import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, actions) => {
            console.log(state.count);
            
            state.count = state.count + actions.payload
        },
        decrement: (state, actions) => {
            state.count -= actions.payload
        },
    },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer