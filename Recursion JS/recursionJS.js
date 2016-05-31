//PROBLEM 1
//calculate the factorial of a number
function factorial(num) {
    //baseCase = conditional Statement that will stop recursion. Else, we will end up in infinite loop.
    if (num === 0) {
        return 1;
    }
    //recursiveCase: where recursion will happen. Where i will call function within a function
    return num * factorial(num - 1);
    /*
1. factorial(5)
2. if statement then return 5 * function(5-1);
3. function(4)
2. if statement then return 4 * function(4-1);
3. function(3)
2. if statement then return 3 * function(3-1);
...
    */
}
factorial(5);
/*




*/






//PROBLEM 2
//Write a JavaScript program to get the integers in range (x, y)
function range(firstNum, lastNum) {
    //baseCase = conditional Statement that will stop recursion.

    if (lastNum - firstNum < 2) {
        return [];
    } else if (lastNum - firstNum === 2) {
        return [lastNum - 1];
    } else {
        return [firstNum + 1].concat(range(firstNum + 1, lastNum));  //recursiveCase: where recursion will happen. Its similar to loops.
    }


}
range(2,4);
