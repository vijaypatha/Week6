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

//PROBLEM 2
//Write a JavaScript program to get the integers in range (x, y) (2,9) ==> 3,4,5,6,7
function range(firstNum, lastNum) {
    //baseCase = conditional Statement that will stop recursion.
    if (lastNum - firstNum < 2) {
        return [];
    } else if (lastNum - firstNum === 2) {
        return [lastNum - 1];
    } else {
        return [firstNum + 1].concat(range(firstNum + 1, lastNum)); //recursiveCase: where recursion will happen. Its similar to loops.
    }
}
console.log(range(4, 10));

//PROBLEM 1 REPEAT
function facto(num) {
    if (num === 0) {
        return 1;
    }
    return num * facto(num - 1);
}
console.log(facto(5));

// PROBLEM 2 REPEAT
function range(firstNum, lastNum) {
    if (lastNum - firstNum < 2) {
        return [];
    } else if (lastNum - firstNum === 2) {
        return [lastNum - 1];
    } else {
        return ([firstNum + 1].concat(range(firstNum + 1, lastNum)));
        // firstNum+1,firstNum+1+1,firstNum+1+1+1
        //in the recurssive functon, function is being called multiple times untill lastNum-firstNum === 2, and return lastNum -1
        //check with mentors?? why is it stoping??
    }
}
console.log(range(4, 9));

//PROBLEM 2 ASSIST
var firstArr = [1, 2, 3];
var seconArr = ["a", "b", "c"];
var newArr = firstArr.concat(seconArr);
console.log(newArr); //[1, 2, 3, "a", "b", "c"]

// PROBLEM 3
//compute the sum of an array of integers
var myArr = [1,2,3,4,5] // output: 15
var result = myArr.reduce(function(a,b){
return  a + b;
});
console.log(result);

//PROBLEM 3 with baseCase and recursiveCase
var array_sum = function(my_array) {
  if (my_array.length === 1) {
    return my_array[0];
  }
  else {
    return my_array.pop() + array_sum(my_array);
  }
};
console.log(array_sum([1,2,3,4,5,6]));

//PROBLEM 3 ASSIST
var Arr1 = [1,2,3];
var Arr2 = Arr1.pop();
console.log(Arr2); //3 not [1,2]

//step 1 ==> length = 6;
//else statement my_array.pop() =6 +  my_array = [1,2,3,4,5] + fn array_sum
//step 2 ==> length = 5;
//else statement my_array.pop() = (6+5)  + my_array = [1,2,3,4] + fn array_sum
//step 3 ==> length = 4;
//else statement my_array.pop() = (6+5+4 )my_array = [1,2,3] + fn array_sum
//step 4
// length = 3
//step 5
// length = 2
//step 6
//length = 1 ==> return my_array[0] ==> 1
//6+5+4+..+1
