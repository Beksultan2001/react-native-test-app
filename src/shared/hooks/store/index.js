import {createStore,combineReducers, applyMiddleware} from 'redux';
import { clubReducer } from './clubReducer';
import { reserveReducer } from './reserveReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import  thunkMiddleware from 'redux-thunk';


const rootReducer=combineReducers({
    club: clubReducer,
    reserve: reserveReducer
});

const middlewares=[thunkMiddleware];



export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(...middlewares)))