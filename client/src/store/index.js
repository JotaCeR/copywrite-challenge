import { configureStore } from '@reduxjs/toolkit'
import currentReducer from '../reducer/currentSlice'
import lastReducer from '../reducer/lastSlice'
import historyReducer from '../reducer/historySlice'

const store = configureStore({
    reducer: {
        current: currentReducer,
        last: lastReducer,
        history: historyReducer
    },
    middleware: [thunk, logger],
    devTools: true
});

module.exports = store;