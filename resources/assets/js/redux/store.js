import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers/rootReducer';
import { logger } from './middlewares';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger, ReduxThunk))
);

export default store;
