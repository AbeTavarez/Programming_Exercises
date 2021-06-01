

function title_case(str){

    let lower_arr = str.toLowerCase().split(' ')
    let new_arr = []

    for (let c in lower_arr){
        let first_char = lower_arr[c].slice(0,1).toUpperCase()
        let rest_of_chars = lower_arr[c].slice(1,)
        let new_word = first_char.concat(rest_of_chars)
        new_arr.push(new_word)
    }
    return new_arr.join(' ')
}

console.log(title_case('gOOd JOB MAn'))