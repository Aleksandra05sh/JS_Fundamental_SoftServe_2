/*Array. Задание №1.
1. Создайте массив с элементами "Джаз", "Блюз";
2. Добавьте в конец элемент "Рок-н-Ролл";
3. Замените предпоследний элемент с конца на "Классика". Код замены должен быть универсальный, т.е. работать для массивов любой длины;
4. Удалите первый элемент массива и выведите его на экран;
5. Добавьте в начало элементы "Рэп" и "Регги".

Массив в результате каждого шага:
1. ["Джаз", "Блюз"]
2. ["Джаз", "Блюз", "Рок-н-Ролл"]
3. ["Джаз", "Классика", "Рок-н-Ролл"]
4. ["Классика", "Рок-н-Ролл"]
5. ["Рэп", "Регги", "Классика", "Рок-н-Ролл"]*/

var arr = ["Джаз", "Блюз"];             /*1*/
arr.push("Рок-н-Ролл");                 /*2*/
arr.splice(arr.length-2, 1, "Классика") /*3*/
var first = arr.shift();                /*4*/
console.log(first);                     /*4*/
arr.unshift("Рэп", "Регги");            /*5*/


/*Array. Задание №2.
Расширьте тип объектов Array методом sortDesc(), который сортирует массив по убыванию.
// Ваш код
var arr = [5, 1, 4, 2, 3];
arr.sortDesc();
console.log(arr); // [5, 4, 3, 2, 1]*/

Array.prototype.sortDesc = function() {
  this.sort();
  this.reverse();
};
var arr = [5, 1, 4, 2, 3];
arr.sortDesc();
console.log(arr); // [5, 4, 3, 2, 1]



/* Array. Задание №3.
Напишите функцию deleteEvenNumbers(array), которая принимает массив array, удаляет из массива array четные числа и возвращает его.
function deleteEvenNumbers(array) {
   // Ваш код
}
var arr = [1, 2, 3, 4, 5];
var arr = deleteEvenNumbers(arr);
console.log(arr); // [1, 3, 5]*/

function deleteEvenNumbers(array) {
  return  array.filter( function (value) {
    return value % 2 === 1;
    }
  )
}
var arr = [1, 2, 3, 4, 5];
var arr = deleteEvenNumbers(arr);
console.log(arr); // [1, 3, 5]


/* Array. Задание №4.
Есть следующий код:
var arr = ["Tom", "Sam", "Bob"];
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
   arrLength[i] = "<li>" + arr[i] + "</li>";
}
console.log(arrLength); // ["<li>Tom</li>", "<li>Sam</li>", "<li>Bob</li>"]
Перепишите данный код, заменив цикл for на метод map().*/


var arr = ["Tom", "Sam", "Bob"];
var arrLength = [];

arrLength = arr.map( function(value) {
  return "<li>" + value  + "</li>";
  } );
console.log(arrLength);


/*Array. Задание №5.
Напишите функцию matrixToArray(matrix), которая принимает двумерный массив (матрицу) matrix, разворачивает двумерный массив в одномерный и возвращает его. Данное задание необходимо решить при помощи аккумулирующих методов.
function matrixToArray(matrix) {
   // Ваш код
}
var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr = matrixToArray(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9] */

function matrixToArray(matrix) {
  var openMatrix = matrix.reduce (function (acc, nextArray){
  return acc.concat(nextArray);
    } );
  return openMatrix;
}
var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr = matrixToArray(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9] */