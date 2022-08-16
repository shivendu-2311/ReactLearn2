import { combineReducers, createStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from 'redux-devtools-extension';
import NameSlice from './NameSlice';
//import HotelSlice from './HotelSlice';

export const rootReducer = combineReducers(
    {
         nameSlice: NameSlice,
       //  hotelSlice : HotelSlice
    });


export type AppState = ReturnType<typeof rootReducer>;
export const configureStore = () => createStore(rootReducer, {}, devToolsEnhancer({}));