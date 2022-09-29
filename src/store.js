import gameboardReducer from './gameboardSlice.js';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer:{
        squares: gameboardReducer
    }
})

export default store