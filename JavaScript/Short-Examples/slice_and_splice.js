

function frankenSplice(arr1, arr2, n){
    let front = arr2.slice(0,n)
    let back = arr2.slice(n)

    return [...front, ...arr1, ...back ]
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))