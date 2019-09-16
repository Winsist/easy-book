import {combineReducers} from 'redux'
import {reducer as headerReducer} from '../pages/common/header/store'
import {reducer as homeReducer} from '../pages/home/store'
import {reducer as writersReducer} from '../pages/writers/store'

const reducer = combineReducers({
    header:headerReducer,
    home:homeReducer,
    writers:writersReducer
})

export default reducer;