

function largestOfFour(arr){
    let largest_arr = []
    for (let top in arr){
        let largest_num;

        for (let sub in arr[top]){
            if (typeof(largest_num) === 'undefined'){
                largest_num = arr[top][sub]
            } 
            else if (arr[top][sub] > largest_num){

                largest_num = arr[top][sub]
            }
        }

        largest_arr.push(largest_num)
    }
    return largest_arr
}


// let result = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// console.log(result)

let result1 = largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
console.log(result1)

