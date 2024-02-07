function receivesAFunction (callback) {
    return callback();
}

function returnsANamedFunction () {
    return function name () {return 'Hi';};
}

function returnsAnAnonymousFunction () {
    return function () {return 'Hello';};
}