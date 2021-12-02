function sum(num1, num2){
    return(num1 + num2)
}

var result = sum(10, 5)
console.log(result)

function sum_three(num1, num2, num3){
    var maxnum = 0
    if (num1 > maxnum){
        maxnum = num1;
    }
    if (num2 > maxnum){
        maxnum = num2;
    }
    if (num3 > maxnum){
        maxnum = num3;
    }
    return maxnum;
}
console.log(sum_three(10, 30, 20))

function num(any){
    if(any % 2 === 0) {
        return("Even");
    }   else {
        return("Odd");
    }
}
console.log(num(5))