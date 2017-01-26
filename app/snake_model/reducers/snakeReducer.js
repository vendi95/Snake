import {init, step} from './../actions/snakeActions';

function initWithData(initialGameData) {
    return {
        size: initialGameData.size,
        elements: initialGameData.elements,
        head: initialGameData.head,
        gameOver: false,
    };
}

function makeStep(state, {direction}) {
    state.head.x += direction.x;
    state.head.y += direction.y;

    state.elements.push({
        type: 'snake',
        position: state.head
    });

    return state;
}

function snakeReducer(state = {elements: [], size: {width: 0, height: 0}}, {type, payload}) {
    let newState = state;
    switch (type) {
        case init: {
            newState = initWithData(payload);
            break;
        }
        case step: {
            newState = makeStep(state, payload);
            break;
        }
    }
    return newState;
}

export default snakeReducer;