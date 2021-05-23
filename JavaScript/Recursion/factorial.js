// FACTORIAL EXERCISE


// When we say three factorial or (3!) we mean -> 3 * 2 * 1
// 10! -> 10*9*8*7*6*5*4*3*2*1

// USING LOOPS
function factorialLoop(num){
    let total = 1
    for (let n=num; n>1; n--){
        total *= n;
        //console.log(`Current->`, total)
    };
    return total;
};

console.log(`Factorial->`, factorialLoop(3))

