import { combineReducers, createStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from 'redux-devtools-extension';
import HotelsSlice from './HotelsSlice';
import NameSlice from './NameSlice';
import SetSearchTest from './SetSearchTest';
//import HotelSlice from './HotelSlice';

export const rootReducer = combineReducers(
    {
         nameSlice: NameSlice,
        hotelSlice : HotelsSlice,
        valueset:SetSearchTest,
    });


export type AppState = ReturnType<typeof rootReducer>;
export const configureStore = () => createStore(rootReducer, {}, devToolsEnhancer({}));