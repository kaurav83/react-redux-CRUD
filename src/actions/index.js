const LIST = [];

export function someStuff() {
    return {
        type: 'LIST_PERSONS',
        payload: LIST
    }
}

export function addNote(text) {
    return {
        type: 'ADD_NOTE',
        text,
        id: Date.now()
    }
}

export function editNote(id, text) {
    return {
        type: 'EDIT_NOTE',
        id, 
        text
    }
}

export function deleteNote(id) {
    return {
        type: 'DELETE_NOTE',
        id
    }
}