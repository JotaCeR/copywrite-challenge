import { createSlice } from '@reduxjs/toolkit'

const initialState = { word: null }

const currentSlice = createSlice({
    name: 'current',
    initialState,
    reducers: {
        search(state, action) {
            state.word = action.payload
        },
        clean(state) {
            state.word = null
        }
    }
})

export const { search, clean } = currentSlice.actions
export default currentSlice.reducer