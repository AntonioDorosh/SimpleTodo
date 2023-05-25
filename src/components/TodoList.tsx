import React from 'react';
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";
import {RootState} from "../types/types";

const TodoList = () => {
    const todoList = useSelector((state: RootState) => state.todo);

    return (
        <ul>
            {todoList.length === 0
                ? <h2>list is empty</h2>
                : (
                    todoList.map((todo) => <TodoItem key={todo.id} todo={todo}/>)
                )}
        </ul>
    );
};

export default TodoList;