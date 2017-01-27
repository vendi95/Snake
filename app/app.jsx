import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import SnakeStore from './snake_model/SnakeStore';
import {initAction} from './snake_model/actions/snakeActions';
import Game from './components/Game'
import Login from './components/Login'
import Toplist from './components/toplist/Toplist'

export default {
    run() {
        const levels = [
            {
                size: {
                    width: 20,
                    height: 20,
                },
                speed: 300,
            },
            {
                size: {
                    width: 25,
                    height: 25,
                },
                speed: 200,
            },
            {
                size: {
                    width: 30,
                    height: 30,
                },
                speed: 100,
            },
        ];

        const start = {
            level: levels[0]
        };

        SnakeStore.dispatch(initAction(start));

        ReactDOM.render(
            <Provider store={SnakeStore}>
                <Router history={browserHistory}>
                    <Route path="/" component={Login} />
                    <Route path="/play" component={Game} levels={levels}/>
                    <Route path="/toplist" component={Toplist}/>
                </Router>
            </Provider>,
            document.getElementById('container'));
    },
};
