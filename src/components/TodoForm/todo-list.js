import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todo from './todo';
import {deleteNote, editNote} from '../../actions'

class TodoList extends Component {

    render() {
        
        return(
            <div>
                {
                    this.props.todos.initialReducer.map((todo, id) => {
                        return (
                            <Todo
                                key={todo.id}
                                id={todo.id}
                                text={todo.text}
                                onEdit={this.props.onEdit}
                                onDelete={this.props.onDelete}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEdit: (id, text) => dispatch(editNote(id, text)),
        onDelete: (id) => dispatch(deleteNote(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);