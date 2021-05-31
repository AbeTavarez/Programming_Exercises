

function truncate_str(str, num){
    if (str.length > num){
        let new_str = ''
        let str_substr = str.substring(0, num)
        return `${str_substr}...`
    } else {
        return str
    }
}

console.log(truncate_str("A-tisket a-tasket A green and yellow basket", 8))

console.log("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)