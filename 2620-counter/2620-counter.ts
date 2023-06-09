function createCounter(n: number): () => number {
    let current = n-1
    return function() {
        return current +=1
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */