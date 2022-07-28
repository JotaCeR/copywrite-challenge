import { createSlice } from '@reduxjs/toolkit'

const initialState = { values: [] }

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        add(state, action) {
            state.values.unshift(action.payload)
        },
        remove(state) {
            state.values.pop()
        }
    }
})

export const { add, remove } = historySlice.actions
export default historySlice.reducer