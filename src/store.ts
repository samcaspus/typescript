import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducers";


const store = createStore(RootReducer,applyMiddleware(thunk));

export type rootType = ReturnType<typeof RootReducer>

export default store;