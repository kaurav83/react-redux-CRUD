import React, {Component} from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        }
    }
    

    componentDidUpdate(prevProps, prevState) {
        if (this.state.editing) {
            this.refs.text.focus();
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const textField = this.refs.text.value;
        
        this.props.onEdit(this.props.id, textField);
        this.setState({editing: false});
    }

    handleEdit = () => {
        this.setState({editing: true});
    }

    handleDelete = () => {
        this.props.onDelete(this.props.id);
    }

    renderDisplay = () => {
        return (
            <div className="todo-item">
                <span className="todo-text">{this.props.text}</span>
                <i 
                    className="fas fa-pencil-alt"
                    onClick={this.handleEdit}
                ></i>
                <i 
                    className="fas fa-trash-alt"
                    onClick={this.handleDelete}
                ></i>
            </div>
        )
    }

    renderForm = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="text" defaultValue={this.props.text} />
                <button type="submit"><i className="fas fa-save"></i></button>
            </form>
        )
    }

    render() {
        // const {text, onEdit} = this.props;
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

export default Todo;