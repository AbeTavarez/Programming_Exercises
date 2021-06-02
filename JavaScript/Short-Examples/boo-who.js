
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function boo_who(bool){
    return typeof(bool) === 'boolean' ? true : false
}

console.log(boo_who(null))

console.log(boo_who(true))