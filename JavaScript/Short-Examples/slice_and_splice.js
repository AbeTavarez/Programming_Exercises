

function frankenSplice(arr1, arr2, n){
    let front = arr2.slice(0,n)
    let back = arr2.slice(n)

    return [...front, ...arr1, ...back ]
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))

console.log('===============================================')

Array.prototype.insert = function(data, position){
    if (position >= this.length){
        // put the data at the end if 
        // position is more than the total length of array
        this.push(data)
    } else if (position <= 0){
        // Put data at the start
        // if position is less than or equal to 0
        this.unshift(data)
    } else {
        // Shift all elements to the right
        for (let i = this.length; i >= position; i--){
            this[i] = this[i -1]
        }
        this[position] = data
    }
}

let arr = [1,2,3,4,5];

arr.insert(-1,2)

console.log(arr)