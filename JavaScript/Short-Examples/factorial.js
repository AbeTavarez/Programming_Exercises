function factorialize(num){
    let factorial = 1;
    for (let n = 1; n <= num; n+=1){
        factorial *= n
    }
    console.log(factorial)
}

factorialize(5)