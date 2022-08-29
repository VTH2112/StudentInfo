import { combineReducers } from "redux"
import info from './infoReducer'
const reducers =combineReducers({
    studentInfo:info
})

export default (state , action ) => reducers(state,action)