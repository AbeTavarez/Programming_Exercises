
// using string method endsWith()
function confirmEnding(str, target){
    return str.endsWith(target)

}

console.log(confirmEnding('Bastian', 'n'))


// using string method charAt()
function confirmEnding1(str, target){
    return str.charAt( str.length -1) === target

}

console.log(confirmEnding1('Bastian', 'n'))

