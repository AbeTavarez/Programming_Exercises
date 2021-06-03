


Array.prototype.insert = function(data, position){
    if (position >= this.length){
        // Puts the data at the end of the array if the 
        // position is more than the total length of array
        this.push(data)
    } else if (position <= 0){
        // Puts data at the start of the array
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

// Sample Array
let arr = [1,2,3,4,5];

// Inserting new element
arr.insert(-1,33)

console.log(arr)