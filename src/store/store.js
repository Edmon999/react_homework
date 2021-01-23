import {createStore, applyMiddleware} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import logger from "redux-logger"
import {reducer} from './reducer'
const middleWareArr = [thunk]
if(process.env.NODE_ENV === "development"){
    middleWareArr.push(logger)
}
const middleWare = applyMiddleware(...middleWareArr)
const store = createStore(reducer, composeWithDevTools(middleWare))
export default store