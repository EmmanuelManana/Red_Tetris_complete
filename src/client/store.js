import io from 'socket.io-client';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from './reducers';
import { MiddleWareSockets} from './middlewares/SocketMiddleware';
import { GuardMiddleWare } from './middlewares/GuardMiddleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//prepare socket connection
const socket = io.connect();

// create redux store and pass Socketconnections object.
const store = createStore(reducer, applyMiddleware(thunk, MiddleWareSockets(socket), GuardMiddleWare, logger)
);

export { store };
