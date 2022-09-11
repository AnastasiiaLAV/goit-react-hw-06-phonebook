import { createReducer } from "@reduxjs/toolkit";
import { addContacts, removeContacts } from "./contacts-actions";

const contactsReducer = createReducer([], {
    [addContacts]: (store, {payload}) => [...store, payload],
    [removeContacts]: (store, {payload}) => store.filter(({id}) => id !== payload),
})

export default contactsReducer;
// -----Redux-----
// const initialStore = [];

// const contactsReducer = (store = initialStore, {type, payload}) => {
//     switch(type){
//     case addContacts.type:
//         return [...store, payload];

//     case removeContacts.type:
//         return store.filter(({id}) => id !== payload);

//     default:
//         return store;
//     }
// }
