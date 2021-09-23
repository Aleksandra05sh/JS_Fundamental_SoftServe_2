"use strict"

/*ФУНКЦИЯ КАК ОБЪЕКТ"*/

/*Задание №1.
Напишите функцию mul(), которая принимает любое количество параметров разного типа и возвращает произведение параметров типа Number.
Если параметры типа Number отсутствуют, возвращает число 0.
function mul() {
   // Ваш код
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0*/

function mul() {
  var res = 1;
  var isNumber = false;
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      res = res * arguments[i];
      isNumber = true;
    } 
  }


  if (isNumber) {
    return res;
  } else {
    return 0;
    }
 }
 console.log(mul(1, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0*/



/*Задание №2. Явное указание this
Есть следующий код:
Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях.*/


var country = {
   name: "Украина",
   language: "украинский",
   capital: {
      name: "Киев",
      population: 2907817,
      area: 847.66
   }
};
function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}
format.call(country, '<', '>'); // "<Украина>"
format.apply(country, ['[', ']'] ); // "[Украина]"
format.call(country.capital, '"', '"' ); // ""Киев""
format.apply(country.capital, ['', '']); // "Киев"



/*ПРИВЯЗКА КОНТЕКСТА*/

/*Задание №1.
Есть следующий код:
var user = {
   name: "Tom"
};
function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}
var tomFormat = // Ваш код
tomFormat("<<<", ">>>"); // "<<<Tom>>>"
Привяжите функцию format() к объекту user.
Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию обвертку;
2. Метод bind().*/



//1. Анонимную функцию обвертку

var user = {
  name: "Tom"
};

function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
}

var tomFormat = function(beginMsg, endMsg) {
  format.call(user, beginMsg, endMsg);
}

tomFormat("<<<", ">>>"); // "<<<Tom>>>"


//2. Метод bind()


var user = {
  name: "Tom"
};

function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
}

var tomFormat = format.bind(user);
tomFormat("<<<", ">>>"); // "<<<Tom>>>"



/*Задание №2.
Есть следующий код:
function mul(a, b) {
   return a * b;
}
var doubleMul = // Ваш код
var qudraMul = // Ваш код
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20
Используя функцию mul() и карринг создайте две функции doubleMul() и qadraMul(), которые умножают числа на 2 и на 4 соответственно.*/

function mul(a, b) {
  return a * b;
}
var doubleMul = mul.bind(null, 2);
var qudraMul = mul.bind(null, 4);
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20


/*Задание №3.
Напишите аналог метода bind():*/

function bind(func, context) {

  return function() {
    func.call(context);
  };
}

function func() {
  console.log(this.name + " - "+ this.age);
}
var user = {
  name: "Tom",
  age: 20
};

var f = bind(func, user);
f(); // "Tom – 20"



