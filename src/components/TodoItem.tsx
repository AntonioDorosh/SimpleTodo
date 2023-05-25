import React from 'react';
import {AppDispatch, ITask} from "../types/types";
import {useDispatch} from "react-redux";
import {deleteTask, toggleIsDone} from "../store/TodoSlice";

interface TodoItemProps {
    todo: ITask
}

const TodoItem = ({todo}: TodoItemProps) => {
    const dispatch: AppDispatch = useDispatch()

    const deleteItems = () => {
        dispatch(deleteTask(todo))
    }

    const toggleHandler = () => {
        dispatch(toggleIsDone(todo))
    }

    return (
        <li style={todo.isDone ? {textDecoration: 'line-through'} : {}}>
            <input type="checkbox" checked={todo.isDone} onChange={toggleHandler}/>
            <label>{todo.title}</label>
            <button onClick={deleteItems}>delete</button>
        </li>
    );
};

export default TodoItem;