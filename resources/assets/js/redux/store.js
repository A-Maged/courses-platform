import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers/rootReducer';
import customMiddlewares from './middlewares';
import ReduxThunk from 'redux-thunk';

const middlewares = customMiddlewares.concat(ReduxThunk);
// const middlewares = [ReduxThunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export const dispatch = store.dispatch;

export default store;
