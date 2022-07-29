import { createSlice } from '@reduxjs/toolkit'
import reverseWord from '../services/server_requests/reverse'

const initialState = { word: null, reverse: null }

const currentSlice = createSlice({
    name: 'current',
    initialState,
    reducers: {
        search(state, action) {
            state.word = action.payload
            // HERE API CALL
            state.reverse = reverseWord(action.payload)
        },
        clean(state) {
            state.word = null
            state.reverse = null
        }
    }
})

export const { search, clean } = currentSlice.actions
export default currentSlice.reducer