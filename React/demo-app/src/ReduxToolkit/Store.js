import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import {createLogger} from 'redux-logger';

const logger=createLogger();

export const store= configureStore({
    reducer:{
        login:loginReducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

