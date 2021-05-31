function find_longest_word_length(str){
    
    let str_arr = str.split(' ')
    let longest = 0

    for (let str in str_arr){
        if (str_arr[str].length > longest){
            longest = str_arr[str].length
        }
    }
    console.log(longest)
}

find_longest_word_length("The quick brown fox jumped over the lazy dog")