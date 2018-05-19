import React, {Component} from 'react';
import './TodoContainer.css';
import TodoForm from './TodoForm/todo-form';
import TodoList from './TodoForm/todo-list';

class TodoContainer extends Component {

    render() {
        return(
            <div className="todo-container">
                <h1 className="title">To Do List App</h1>

                <TodoForm />
                <TodoList />
            </div>
        )
    }
}

export default TodoContainer;