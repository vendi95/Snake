const init = 'INIT';
const step = 'STEP';
const turn = 'TURN';
const restart = 'RESTART';
const setName = 'SET_NAME';

function initAction(payload) {
    return {
        payload,
        type: init,
    };
}

function turnAction(direction) {
    return {
        payload:{
            direction: direction
        },
        type: turn,
    };
}

function restartAction(level) {
    return {
        payload:{
            level: level
        },
        type: restart,
    };
}

function setNameAction(name) {
    return {
        payload:{
            name: name
        },
        type: setName,
    };
}

function stepAction() {
  return {
    type: step,
  };
}

export {
    initAction,
    stepAction,
    turnAction,
    restartAction,
    setNameAction,
    init,
    step,
    turn,
    restart,
    setName,
};
