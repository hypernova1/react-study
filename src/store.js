import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger'; 
import { createStore, applyMiddleware } from 'redux';

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

export default store;