//core of store
import { applyMiddleware, createStore, compose } from 'redux';
//all reducers
import rootReducer from "../reducers/index";
//library for assync queries
import thunk from 'redux-thunk';
//Save store in localstorage
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'] // only store.user will be saved
}
//Create middleware
const middleware = applyMiddleware(thunk);
const persistedReducer = persistReducer(persistConfig, rootReducer)
let store= createStore(
  persistedReducer,
  compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
);
export default store
export  let persistor = persistStore(store)
