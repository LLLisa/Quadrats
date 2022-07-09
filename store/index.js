import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { port } from '../server/index';

// import GeneralStore from 'redux-general-store';

// export const GS = new GeneralStore(`http://localhost:${port}`, ['tiles']);

// const reducer = combineReducers({ ...GS.reducerBody });

const reducer = () => [];
const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
