

function reverseString(str){
    console.log(`Input string: ${str}`)
    let str_arr = str.split('').reverse()
    let reverse_str = str_arr.join('')
    console.log(`Reversed string: ${reverse_str}`)
}

reverseString('hello')