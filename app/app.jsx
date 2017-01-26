import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import SnakeStore from './snake_model/SnakeStore';
import {initAction, stepAction} from './snake_model/actions/snakeActions';
import Board from './components/board_elements/Board';
import LevelSelector from './components/level_selector/LevelSelector';

export default {
    run() {
        const mockBoard = {
            size: {
                width: 10,
                height: 20,
            },
            elements: [
                {
                    type: 'snake',
                    position: {
                        x: 4,
                        y: 10,
                    },
                },
                {
                    type: 'snake',
                    position: {
                        x: 5,
                        y: 10,
                    },
                },
                {
                    type: 'snake',
                    position: {
                        x: 6,
                        y: 10,
                    },
                },
                {
                    type: 'food',
                    position: {
                        x: 5,
                        y: 9,
                    },
                },
            ],
            head: {
                x: 6,
                y: 10,
            }
        };

        const levels = [
            {
                size: {
                    width: 10,
                    height: 10,
                },
                speed: 301,
            },
            {
                size: {
                    width: 20,
                    height: 20,
                },
                speed: 201,
            },
            {
                size: {
                    width: 30,
                    height: 30,
                },
                speed: 100,
            },
        ];

        SnakeStore.dispatch(initAction(mockBoard));

        setInterval(function(){
            SnakeStore.dispatch(stepAction({x: 0, y: 1}));
        }, 300);

        ReactDOM.render(
            <Provider store={SnakeStore}>
                <div>
                    <LevelSelector levels={levels}/>
                    <Board/>
                </div>
            </Provider>,
            document.getElementById('container'));
    },
};
