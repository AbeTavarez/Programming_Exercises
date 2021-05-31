

function repeat_str_time(str, num) {
    return str.repeat(num)
}

console.log(repeat_str_time('echo_1',5))

function repeat_str_time1(str, num) {
    let new_str = ''
    let i = 0
    while (i < num){
        new_str += str
        i++
    }
    console.log(new_str)
}

repeat_str_time1('echo_2', 10)