type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
let currentCount = init
const increment = () => currentCount += 1
const reset = () => currentCount = init
const decrement = () =>currentCount -= 1

return {increment, decrement, reset}
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */