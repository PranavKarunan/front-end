import { createStore } from 'redux'

const initialState = {};
const movieReducer = ({ state = initialState, action }) => {

}
export const store = createStore(
    movieReducer,
    initialState
)