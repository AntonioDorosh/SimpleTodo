import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITask} from "../types/types";

export const TodoSlice = createSlice({
    name: 'todo',
    initialState: [] as ITask[],
    reducers: {
        addTask: (state, action:PayloadAction<ITask>) => {
            return [...state, {
                id: new Date().getTime(),
                title: action.payload.title
            }]
        },
        deleteTask: (state, action:PayloadAction<ITask>) => {
            return state.filter((todo) => todo.id !== action.payload.id)
        },
        toggleIsDone: (state, action:PayloadAction<ITask>) => {
            return state.map((task) => task.id === action.payload.id ? {
                ...task,
                isDone: !task.isDone
            } : task)
        }
    }
})

export const {addTask, deleteTask, toggleIsDone} = TodoSlice.actions;
export const TodoReducer = TodoSlice.reducer;