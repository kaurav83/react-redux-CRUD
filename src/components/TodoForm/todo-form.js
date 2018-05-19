import React, {Component} from 'react';
import './TodoForm.css';
import {addNote} from '../../actions';
import {connect} from 'react-redux';

class TodoForm extends Component {
    state = {
        text: ''
    }

    // componentWillMount() {
    //     this.props.dispatch(addNote(this.state.text))
    // }

    handleAdd = (e) => {
        e.preventDefault();

        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }

    handleField = (e) => {

        this.setState({
            text: e.target.value
        })
    }
    
    render() {
        return (
            <div className="todo-form">
                
                    <div className="block-field">
                        <input 
                            className="field"
                            type="text" 
                            onChange={this.handleField}
                            value={this.state.text}
                        />
                    </div>
                    
                    <button
                        className="add-note"
                        onClick={this.handleAdd}
                        >
                        Добавить запись
                    </button>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: text => dispatch(addNote(text)),
    }
}

export default connect(null, mapDispatchToProps)(TodoForm);