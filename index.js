function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction() {
    return function namedFunction () {
        console.log("this is a function")
    }
}

function returnsAnAnonymousFunction() {
    return function () { console.log("This is another unnamed function")}
}