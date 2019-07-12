import character_json from '../data/characters.json'
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions'

function Characters(state = character_json, action) {
    let characters
    switch (action.type) {
        case ADD_CHARACTER:
            characters = state.filter(item => item.id !== action.id)
            return characters
        case REMOVE_CHARACTER:
            characters = [...state, createCharacter(action.id)]
            return characters
        default: return state;
    }
}

function createCharacter(id) {
    let character = character_json.find(c => c.id === id)
    return character
}

export default Characters