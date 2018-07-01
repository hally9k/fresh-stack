import { List } from 'immutable'
import { ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'

const ADD = 'ADD'
const SEARCH = 'SEARCH'
const RECEIVE = 'RECEIVE'

export function add(payload) {
    return { type: ADD, payload }
}
export function search(payload) {
    return { type: SEARCH, payload }
}
export function receive(payload) {
    return { type: RECEIVE, payload }
}

const INITIAL_STATE = List()

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RECEIVE:
            return List(action.payload)

        default:
            return state
    }
}

const searchEpic = ($action) =>
    $action.pipe(
        ofType(SEARCH),
        mergeMap(({ payload }) => {
            return fetch('/api/search', { method: 'POST', body: payload })
                .then((res) => {
                    if (res.ok === false) {
                        throw Error(res.statusText)
                    }

                    return res.json()
                })
                .then((items) => {
                    return receive(items)
                })
        })
    )

const addEpic = ($action) =>
    $action.pipe(
        ofType(ADD),
        mergeMap(({ payload }) => {
            return fetch('/api/add', { method: 'POST', body: payload })
                .then((x) => {
                    if (x.ok === false) {
                        throw Error(statusText)
                    }

                    return x.json()
                })
                .then((items) => {
                    return [] // success()
                })
        })
    )

export const epics = {
    addEpic,
    searchEpic
}
