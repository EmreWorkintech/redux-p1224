import userReducer from "./reducers/userReducer";
import { legacy_createStore as createStore } from "redux";

export const myStore = createStore(userReducer);
