import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import currentReducer from '../reducer/currentSlice'
import lastReducer from '../reducer/lastSlice'
import historyReducer from '../reducer/historySlice'

const store = configureStore({
    reducer: {
        current: currentReducer,
        last: lastReducer,
        history: historyReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true
});

export default store