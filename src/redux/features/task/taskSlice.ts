import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
    tasks: ITask[],
    filter: 'all' | 'high' | 'low' | 'medium'
}

const initialState : InitialState = {
    tasks: [
        {
            id: '25',
            title: "Initialize frontend",
            description: 'Create home page, and routing',
            dueDate: '2025-11',
            isCompleted: false,
            priority: 'High'
        },
        {
            id: '26',
            title: "Initialize backend",
            description: 'Create home page, and done git',
            dueDate: '2025-11',
            isCompleted: false,
            priority: 'Medium'
        },
    ],
    filter: 'all'
}


const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {}  
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export default taskSlice.reducer