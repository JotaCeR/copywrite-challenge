import { createSlice } from '@reduxjs/toolkit'

const initialState = { word: null }

const lastSlice = createSlice({
  name: 'last',
  initialState,
  reducers: {
    update (state, action) {
      state.word = action.payload
    },
    clean (state) {
      state.word = null
    }
  }
})

export const { update, clean } = lastSlice.actions
export default lastSlice.reducer
