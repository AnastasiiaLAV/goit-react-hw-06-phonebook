// import { createStore } from "redux";
// import reducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-reducer";
import filterReducer from "./filter/filter-reducer";
import storage from "redux-persist/lib/storage"
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})

const contactsPersistConfig = {
    key: "contacts",
    storage,
    whitelist: ["contacts"]
}

const rootPersistReducer = persistReducer(contactsPersistConfig, rootReducer);


export const store = configureStore({
    reducer: rootPersistReducer,
})
export const persistor = persistStore (store);

