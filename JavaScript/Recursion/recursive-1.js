// RECURSION EXE.1

// USING LOOPS
function countDownLoop(num){
    for (i=num; i>0; i--){
        console.log(i)
    };
    console.log('Yayy!!')
};

countDownLoop(5)



// USING RECURSION
function countDownRecursion(num){
    // Base case
    if (num <= 0){
        console.log('Yayy!!')
        return ;
    }
    console.log(num)
    num = num -1
    // Recursive Call\
    countDownRecursion(num)
};

//countDownRecursion(5)