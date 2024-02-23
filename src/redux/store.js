import { legacy_createStore as createStore ,applyMiddleware,combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { authReducer } from "./reducers/auth.reducer"
import {homeVideosReducer}from "./reducers/videos.reducer"


const Reducer = combineReducers({
    auth:authReducer,
    homeVideos:homeVideosReducer,
    
})

const middleware=composeWithDevTools(applyMiddleware(thunk));

const store = createStore(
    Reducer,
    {},
    middleware
)

export default store