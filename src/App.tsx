import React from 'react';

import './App.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
    return (
        <div className='container'>
            <h2><span style={{color: 'aqua'}}>React</span> Todo List</h2>
            <TodoForm/>
            <TodoList/>
        </div>
    );
};

export default App;