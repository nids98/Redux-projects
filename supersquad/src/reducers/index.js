import { combineReducers } from 'redux'

import heros from './Heros'
import characters from './Characters'

const rootReducer = combineReducers({
    characters,
    heros
})

export default rootReducer