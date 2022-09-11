// import { createStore } from "redux";
// import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-reducer";
import filterReducer from "./filter/filter-reducer";

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = configureStore({
    reducer:{
        contacts: contactsReducer,
        filter: filterReducer,
    }
})

export default store;
