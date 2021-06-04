

// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.


function bouncer(arr){
    let true_arr = []
    for (let x in arr) {    
        if (Boolean(arr[x]) === true) {
            true_arr.push(arr[x])
        }   
    }
    return true_arr
}


// function bouncer(arr) {
//     arr.filter(x => Boolean(x) === true)
//     return arr
//   }

// function bouncer( arr ){
//     return arr.filter( function( value ){
//         return value;
//     });
// }

let output = bouncer([7, "ate", false, 9])

console.log(output)