

// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.


function bouncer(arr){
    // let falsy = [false, null, 0, "", undefined, NaN]

    // console.log(Boolean(falsy[1]))
    // console.log(falsy.splice(0,1, 'me'))
    // console.log(falsy)
    for (let x in arr) {
        let val = Boolean(arr[x])
        console.log(val)
        if (val === false || null || 0 || "" || undefined || NaN){
            arr.splice(x,1)
        }
        
    }
    console.log(arr)
}

console.log(bouncer([7, "ate", "", false, 9]))