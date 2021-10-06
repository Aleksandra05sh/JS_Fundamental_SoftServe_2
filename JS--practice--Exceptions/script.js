'use strict'

     
/* Искоючения.Задание №1. Напишите функцию sumSliceArray(arr, first, second), которая принимает массив arr и два числа (first и second) – порядковые номера элементов массива, которые необходимо суммировать. Например, если ввели 3 и 5 – суммируются 3-й и 5-й элементы. Функция должна генерировать исключения если были введены не числа, и когда одно из чисел, или оба больше размера массива.
Напишите код, который использует данную функцию, предусмотрите обработку возможных исключений.*/

function sumSliceArray(arr, first, second) {
  if (typeof first !== 'number' || typeof second !== 'number') {
    throw new Error('Введено не число');
  } else if (first > arr.length || second > arr.length) {
    throw new TypeError ('Порядковый номер больше масива');
  } else {
    return arr[first - 1] + arr[second - 1];
  }
};

var array = [1, 2, 3, 4, 5, 6]

// var res = sumSliceArray(array, 7, 3);
// console.log(res);


// Задание №2.
// Возьмите функцию sumSliceArray(arr, first, second) из предыдущего задания и напишите код, который ее использует, но перед самим использованием проверяет все параметры на правильность. Таким образом, никогда не должны генерироваться исключения, которые есть внутри данной функции.



function checkSumSliceArray(arr, first, second) {
  if (typeof first === 'number' && typeof second === 'number' && first <= arr.length && second <= arr.length) {
    return sumSliceArray(arr, first, second);
  }
}  
  
var res2 = checkSumSliceArray(array, 1, 2)

