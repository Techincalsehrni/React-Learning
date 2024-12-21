import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/Todo/todoslice';

export const store = configureStore({
    reducer: todoReducer
})