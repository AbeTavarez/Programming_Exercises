// let x = 2;
// let y = 3;
// console.log(x)
// console.log(y)
// console.log(x*y)


function func(x,y){
    let ans = x*y;
    return ans * ans -y
}

// console.log(func(0,0))
// console.log(func(-1,1))
// console.log(func(1,-1))
// console.log(func(-1,-1))

// class Multiplier {
//     constructor(){
//         this.count = 1;
//     }
//     increcemnt(){
//         this.count = this.count +1;
//     }
//     apply(x){
//         return this.count*x;
//     }
// }

// let multiplier = new Multiplier();

// console.log(multiplier.apply(5))
// multiplier.increcemnt()

// multiplier.increcemnt()
// console.log(multiplier)

// console.log(multiplier.apply(5))


// let x=2
// let y=3
// if (x<y){
//     x=x+1;
// } else {
//     y = y+1
// }


// if (x<y){
//     x =x+1
// } else {
//     y = y+1;
// }
// console.log(x)
// console.log(y)

// function func (x,y){
//     let ans = 0;
//     if (x>y){
//         ans = ans + x;
//     } else if (x<y){
//         ans = ans + y;
//     }
//     if (ans < 0){
//         ans = ans + ans;
//     } else {
//         ans = ans - ans
//     }
//     return ans;
// }

// console.log(func(1,10))
// console.log(func(5,15))
// console.log(func(-1,-10))


// let i =0;
// while (i<=10){
//     console.log(i)
//     i=i+1
// }

// for (let i=15; i>0; i -=5) {
//     console.log(i)
// }

// function func(x){
//     if (x <= 0){
//         return x;
//     }
//     return func(x-5)
// }

// console.log(func(15))
// console.log(func(17))
// console.log(func(3))


function intersection(A,B){
    let intersection = [];
    for (let a of A){
        if (B.includes(a)){
            intersection.push(a)
        }
    }
    return intersection
};

// function union(A,B){
//     return [...A, ...B]

// }

// function inter(A,B,C){
//     let arr1 = A.filter(i => B.indexOf(i) != -1)
//     console.log(arr1)
//     let finalArr = arr1.filter(i => C.indexOf(i) != -1 )
//     return finalArr
// }
// console.log(inter([1,2,3], [3,4,5], [3,5,6,7]))

function inter(A,B,C){
    let a1 = new Set([...A,...B])
    let finalArr = [...a1].filter(i => C.indexOf(i) != -1 )
    return finalArr
}
console.log(inter([1,2,3], [3,4,5], [3,5,6,7]))


//console.log(union([1,2,3], [4,6,3]))


// function diff(A,B){
    
//     let arr = A.filter( (i, idx) => B.indexOf(i) === -1)
//     return arr
// }

function diff(A,B){
    
    let arr1 = A.filter( i => !B.includes(i))
    let arr2 = B.filter( i => !A.includes(i))
    return [...arr1, ...arr2]
}

// console.log(diff([1,2,3], [4,6,3]))

