export default function(state = [], action) {
    switch(action.type) {
        case 'ADD_NOTE' :
            return [
                ...state, 
                {
                    id: action.id, 
                    text: action.text, 
                    completed: false
                } 
            ];
        
        case 'EDIT_NOTE' :
            // if (state.id !== action.id) {
            //     return state;
            // }

            // return Object.assign({}, state, {
            //     text: action.text
            // })
            
            return state.map(todo => 
                todo.id !== action.id ?
                    todo
                : 
                    {
                        ...todo, text: action.text
                    }
            )
        
        case 'DELETE_NOTE' :
            const itemTodo = state.findIndex(todo => todo.id === action.id)

            return [
                ...state.slice(0, itemTodo),
                ...state.slice(itemTodo + 1)
            ]
        default:
            return state;
    }
}