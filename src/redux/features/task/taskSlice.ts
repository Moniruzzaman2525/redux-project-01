import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface InitialState {
    tasks: ITask[],
    filter: 'all' | 'high' | 'low' | 'medium'
}

const initialState: InitialState = {
    tasks: [],
    filter: 'all'
}


const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            const id = '22'

            const taskData = {
                ...action.payload,
                id, 
                isComplete: false,
            }

            state.tasks.push(taskData)
        }
    }
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export const { addTask } = taskSlice.actions
export default taskSlice.reducer