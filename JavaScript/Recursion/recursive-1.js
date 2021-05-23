function countDown(num){
    // Base case
    if (num <= 0){
        console.log('Yayy!!')
        return ;
    }
    console.log(num)
    num = num -1
    // Recursive Call\
    countDown(num)
};

countDown(5)