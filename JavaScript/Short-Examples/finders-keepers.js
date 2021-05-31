

function find_element(arr, func){
    let el = undefined;
    for (let i in arr){
        let result = func(arr[i])
        if (result === true) {
            el = arr[i]
            break
        } 
    }
    return el
}

console.log(find_element([1, 2, 3, 4], num => num % 2 === 0))
console.log(find_element([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))