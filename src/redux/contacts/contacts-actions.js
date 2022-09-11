import { nanoid } from "nanoid"
// import { ADD_CONTACTS, REMOVE_CONTACTS } from "./contacts-types"
import { createAction } from "@reduxjs/toolkit";

export const addContacts = createAction('contacts/add', (data) =>{
    return {
            payload:{
                ...data,
                id: nanoid(5),
            },
        }
});

export const removeContacts = createAction('contacts/remove')

// export const addContacts = (payload) =>{
//     return {
//         type: ADD_CONTACTS,
//         payload:{
//             id: nanoid(5),
//             ...payload
//         },
//     }
// }

// export const removeContacts = (payload) =>{
//     return {
//         type: REMOVE_CONTACTS,
//         payload,
//     }
// }

