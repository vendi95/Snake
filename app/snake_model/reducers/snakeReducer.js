import 'whatwg-fetch';

import {init, step, turn, restart, setName} from './../actions/snakeActions';

function initWithData(initialGameData) {
    return makeRestart({name:""}, initialGameData);
}

function postResult(state){
    fetch('http://localhost:3000/addResult', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: state.name,
            date: (new Date()).getTime(),
            level: {
                size: state.size,
                speed: state.speed,
            },
            score: state.snake.length,
        })
    });
}

function makeStep(state) {
    let newState = JSON.parse(JSON.stringify(state));

    if(!state.gameOver) {
        newState.head.x += state.direction.x;
        newState.head.y += state.direction.y;

        var gameOver = false;

        for(var i = 0; i<newState.snake.length; i++){
            if(newState.head.x == newState.snake[i].x &&
                newState.head.y == newState.snake[i].y){
                gameOver = true;
            }
        }

        gameOver = gameOver || newState.head.x < 0;
        gameOver = gameOver || newState.head.x >= newState.size.width;
        gameOver = gameOver || newState.head.y < 0;
        gameOver = gameOver || newState.head.y >= newState.size.height;

        if(gameOver){
            postResult(newState);
        }

        newState.gameOver = gameOver;

        if(!gameOver) {
            var food = false;
            for(var i=0; i<newState.boardObjects.length; i++){
                if(newState.head.x == newState.boardObjects[i].position.x &&
                    newState.head.y == newState.boardObjects[i].position.y &&
                    newState.boardObjects[i].type == 'food'){
                    newState.boardObjects[i].position.x = Math.floor(Math.random() * newState.size.width);
                    newState.boardObjects[i].position.y = Math.floor(Math.random() * newState.size.height);
                    food = true;
                }
            }

            if(!food) {
                newState.snake.shift();
            }
            newState.snake.push(
                newState.head
            );
        }
    }

    return newState;
}

function makeTurn(state, {direction}){
    let newState = JSON.parse(JSON.stringify(state));
    newState.direction = direction;
    return newState;
}

function makeSetName(state, {name}) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.name = name;
    return newState;
}

function makeRestart(state, {level}){
    return {
        name: state.name,
        size: level.size,
        speed: level.speed,
        snake: [
            {
                x: 0,
                y: 0,
            },
            {
                x: 1,
                y: 0,
            },
            {
                x: 2,
                y: 0,
            },
        ],
        boardObjects: [
            {
                type: "food",
                position:{
                    x: 3,
                    y: 0,
                }
            }
        ],
        head: {
            x: 2,
            y: 0,
        },
        direction: {
            x: 1,
            y: 0,
        },
        gameOver: false,
    };
}

function snakeReducer(state = {snake: [], boardObjects: [], size: {width: 0, height: 0}}, {type, payload}) {
    let newState;
    console.log(type, payload);
    switch (type) {
        case init: {
            newState = initWithData(payload);
            break;
        }
        case step: {
            newState = makeStep(state, payload);
            break;
        }
        case turn: {
            newState = makeTurn(state, payload);
            break;
        }
        case restart: {
            newState = makeRestart(state, payload);
            break;
        }
        case setName: {
            newState = makeSetName(state, payload);
            break;
        }
        default: {
            newState = state;
        }
    }
    return newState;
}

export default snakeReducer;
