function factorialize(num){
    let factorial = 1;
    for (let n = 1; n <= num; n+=1){
        factorial *= n
    }
    console.log(factorial)
}

//factorialize(5)


// recursive
function factorialRecursive(num){
    if (num <= 1) return 1

    return num * factorialRecursive(num-1)
}

console.log(factorialRecursive(0))

