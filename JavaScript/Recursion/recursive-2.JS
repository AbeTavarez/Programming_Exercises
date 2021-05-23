// RECURSION EXE.2 RANGE !!! 

function rangeRecursive(num){
    //BASE CASE
    if (num === 1) return 1;

    // RECURSIVE CALL
    return num + rangeRecursive(num-1)
};

console.log(rangeRecursive(3))

