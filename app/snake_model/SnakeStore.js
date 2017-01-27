import { createStore, applyMiddleware  } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware} from 'react-router-redux';

import snakeReducer from './reducers/snakeReducer';

const middleware = routerMiddleware(browserHistory);

const snakeApp = createStore(
    snakeReducer,
    applyMiddleware(middleware)
);

export default snakeApp;
