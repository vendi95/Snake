const init = 'INIT';
const step = 'STEP';

function initAction(payload) {
    return {
        payload,
        type: init,
    };
}

function stepAction(direction){
    return{
        payload:{
            direction: direction,
        },
        type: step
    }
}

export{
    initAction,
    stepAction,
    init,
    step,
}