import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { wrapEpic } from 'utility/rx'
import product, { epics as productEpics } from 'duck/product'

export default combineReducers({
    product
})

export const epics = combineEpics(...[...Object.values(productEpics)].map(wrapEpic))
