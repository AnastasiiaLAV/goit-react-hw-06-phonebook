
import { FILTER_CONTACTS } from "./filter-type"

export const filterContacts = (payload) =>{
    return {
        type: FILTER_CONTACTS,
        payload,
    }
}