import { createStore } from 'redux';

import snakeReducer from './reducers/snakeReducer';

const snakeApp = createStore(
    snakeReducer
);

export default snakeApp;