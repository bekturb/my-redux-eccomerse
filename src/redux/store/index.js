import {applyMiddleware, createStore} from "redux";
import {reducer} from "../reducer/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

//https://fakestoreapi.com/products