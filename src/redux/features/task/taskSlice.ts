import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";


interface InitialState {
    tasks: ITask[],
    filter: 'all' | 'high' | 'low' | 'medium'
}

const initialState: InitialState = {
    tasks: [
        {
            id: '25',
            title: "Initialize frontend",
            description: 'Create home page, and routing',
            dueDate: '2025-11',
            isCompleted: false,
            priority: 'low'
        },
        {
            id: '2dd5',
            title: "Initialize frontend",
            description: 'Create home page, and routing',
            dueDate: '2025-11',
            isCompleted: false,
            priority: 'medium'
        },
        {
            id: '2f5',
            title: "Initialize frontend",
            description: 'Create home page, and routing',
            dueDate: '2025-11',
            isCompleted: false,
            priority: 'high'
        },
    ],
    filter: 'all'
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">

const createTask = (taskData: DraftTask): ITask => {
    return {
        id: nanoid(), isCompleted: false, ...taskData
    }
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            const taskData = createTask(action.payload)
            state.tasks.push(taskData)
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) => task.id === action.payload ? task.isCompleted = !task.isCompleted : task)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        updateFilter: (state, action: PayloadAction<'all' | 'high' | 'low' | 'medium'>) => {
            state.filter = action.payload
        }
    }
})

export const selectTasks = (state: RootState) => {
    const filter = state.todo.filter
    
    if (filter === 'low') {
        return state.todo.tasks.filter((task) => task.priority === 'low')
    } else if (filter === 'medium') {
        return state.todo.tasks.filter((task) => task.priority === 'medium')
    } else if (filter === 'high') {
        return state.todo.tasks.filter((task) => task.priority === 'high')
    } else {
        return state.todo.tasks
    }
}
export const selectFilter = (state: RootState) => {
   
    return state.todo.filter
}

export const { addTask, toggleCompleteState, deleteTask, updateFilter } = taskSlice.actions
export default taskSlice.reducer