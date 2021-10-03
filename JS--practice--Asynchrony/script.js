'use strict'

 /*Асинхронка Задание №1.
 Напишите функцию random(min, max, delay, callback), которая через delay миллисекунд помещает callback в очередь на выполнение.
 Если min меньше max, функция генерирует случайно число в диапазоне от min до max и передает в callback вторым параметром.
 Если min больше max, функция создает объект ошибки и передает в callback первым параметром.
 Для генерации случайных чисел можно использовать метод Math.random().
 Примеры использования функции:
 function random(min, max, delay, callback) {
    // Ваш код
 }
 random(1, 100, 2000, function (error, data) {
    // Ваш код
 });
 random(1000, 100, 3000, function (error, data) {
    // Ваш код
 });
 Через две секунды, на экране должно появится случайной число от 1 до 100.
 Через три секунды, на экране должна появится информация об ошибке.*/
 
function random(min, max, delay, callback) {
  var data;
  var error;

  if (min < max) {
    data =  Math.random() * (max - min) + min;
  } else {
    error = new Error ('Первое число больше второго');
  }

  setTimeout (function() { callback(error, data) }, delay)
}

random(1, 100, 2000, function (error, data) {
  if (error) {
    throw error;
  }
  console.log(data);
});


random(1000, 100, 3000, function (error, data) {
  if (error) {
    throw error;
  }
  console.log(data);
})