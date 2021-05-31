
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

// using string method includes()
function confirmEnding2(str, target){
    return str.includes(target, str.length -1)

}

console.log(confirmEnding2('Bastian', 'n'))


// using string method indexOf()
function confirmEnding3(str, target){
    console.log(str.indexOf(target, str.length -1) === -1 ? false : true)

}

console.log(confirmEnding3('Bastian', 'n'))

console.log('=========================WINNER=========================================')

function confirmEnding4(str, target) {
    let t_size = target.length
    let end_str = str.slice(-t_size)
    return target === end_str ? true : false
    
  }
  
  confirmEnding4("Bastian", "ian");
