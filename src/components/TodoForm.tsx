import React, {
    ChangeEventHandler,
    EventHandler,
    FormEventHandler,
    useState
} from 'react';
import {useDispatch} from "react-redux";
import {addTask} from "../store/TodoSlice";
import {AppDispatch} from "../types/types";

const TodoForm = () => {
    const [text, setText] = useState('');
    const dispatch: AppDispatch = useDispatch();

    const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        if (text.trim().length === 0) {
            alert('enter some text before adding tasks')
            setText('')
        }

        dispatch(addTask({
            id: new Date().getTime(),
            title: text
        }))
        setText('')
    }

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = ({target}) => {
        setText(target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder={'enter your tasks here'} onChange={onChangeHandler} value={text}/>
            <button type='submit'>add</button>
        </form>
    );
};

export default TodoForm;