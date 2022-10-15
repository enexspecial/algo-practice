// Task 1: Without peeking, write your own recursive factorial method



// Task 2: Use your memo function from the previous exercise to memoize your factorial method

const memomize = (fn) => {
    let cache = {}

    return (...args) =>{
        let n = args[0];
        if(n in cache){
            return cache[n]
        }else{
            let result = fn(n);
            cache[n] = result
            return result;
        }
    }
}

const factorial = memomize((x)=>{
    if( x === 0){
        return 1;
    }else{
        return x * factorial(x - 1)
    }
})


console.log(factorial(6))