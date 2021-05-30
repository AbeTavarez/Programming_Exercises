console.log('===========Splice=====================')

let arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

// Logs full array
console.log(arr)

// Splice array
let weekend = arr.splice(5,2)

// Spliced array
console.log(arr)

// Returned values
console.log(weekend)

console.log('================Slice================')

let num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(num_arr)

let first_three = num_arr.slice(0,3)

console.log('Slice -->',first_three)

console.log('==============IndexOF==================')

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

console.log(fruits.indexOf('dates')) //return -1 if element not in array
console.log(fruits.indexOf('oranges'))
console.log(fruits.indexOf('pears'))

// Filtered Array
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++){
      //console.log(arr[i])
      if (arr[i].indexOf(elem) === -1){
        newArr.push(arr[i])
      }
      
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 1));



console.log('================================')