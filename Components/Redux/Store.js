import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import createsagaMiddleware from 'redux-saga'
import sagaData from "./Saga";

const sagaMiddleware = createsagaMiddleware();

const store = configureStore({
    reducer:RootReducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(sagaData)


export default store;