"use strict";

const arrNumbers2 = [2,6,6,6];
const arrNumbers1 = [2,8,9];

// 1) Написати функцію струлку, яка приймає безліч аргументів і повертає їх добуток.

const multiResult = (initial = 0,...numbers)=>
numbers.reduce((acc, numbers) => acc * numbers,initial);
console.log(multiResult(...arrNumbers1));


// 2) Є масив чисел, треба написати функцію, яка повертає масив з двох елементів, які є мінімальним і максимальним значенням джерельного масиву.

                //    1) вариант

function findMinMax(...arr){
    let maxNumber = Math.max(...arr);
    let minNumber = Math.min(...arr);
    return ([maxNumber, minNumber]); 
    return result};

  console.log(findMinMax(...arrNumbers2));


                //   2) вариант


 const findMinMax2 = (...numbers) => ([Math.min(...numbers),Math.max(...numbers)]);

 console.log(findMinMax2(...arrNumbers2));
