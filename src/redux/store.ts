import { configureStore } from '@reduxjs/toolkit'

import counterReducer from "./features/counter/counterSlice"
import task from "./features/task/taskSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: task
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store