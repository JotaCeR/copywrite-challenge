import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import reverseWord from '../services/server_requests/reverse'

export const revert = createAsyncThunk(
  'current/revert',
  async (value) => {
    const res = await reverseWord(value)
    return res
  }
)

const initialState = { word: null, reverse: null }

const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    search (state, action) {
      state.word = action.payload
    },
    clean (state) {
      state.word = null
      state.reverse = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(revert.fulfilled, (state, action) => {
      state.reverse = action.payload
    })
  }
})

export const { search, clean } = currentSlice.actions
export default currentSlice.reducer
