import character_json from '../data/characters.json'
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions'

function Heros(state = [], action) {
    let heros
    switch (action.type) {
        case ADD_CHARACTER:
            heros = [...state, createCharacter(action.id)]
            return heros
        case REMOVE_CHARACTER:
            heros = state.filter(item => item.id !== action.id)
            return heros
        default:
            return state
    }
}

function createCharacter(id) {
    let character = character_json.find(c => c.id === id)
    return character
}

export default Heros