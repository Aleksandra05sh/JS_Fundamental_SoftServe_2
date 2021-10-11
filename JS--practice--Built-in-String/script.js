/*String. Задание №1.
Дана строка, которая содержит имена пользователей, разделенные запятой – "Login1,LOgin2,login3,loGin4". Разбейте эту строку на массив строк (чтобы отдельно были логины), и приведите их все в нижний регистр.*/

var str = "Login1,LOgin2,login3,loGin4";
var strLowerCase = str.toLowerCase();
console.log(strLowerCase);
var strLowerCaseSplit = strLowerCase.split("")
console.log(strLowerCaseSplit);


/*String. Задание №2
Напишите программу, которая запрашивает у пользователя строки (prompt()). Ввод строк должен быть завершен, когда пользователь вводит строку end. Далее программа проверяет, есть ли в строке цифры, если да, добавляет в начало строки текст "Numbers: ", если нет – "No numbers: " и выводит результат в виде следующей таблицы:*/

var arr = [];
var i = 0;

while (true) {
  var a = prompt("Введите значение:","");
  if (a !== "end") {
    var splitA = a.split("");
    var containNumber = splitA.some(function(value) {
      return !isNaN(Number(value));
    });

    if(containNumber) {
      arr[i] = "Numbers: " + a;
    } else {
      arr[i] = "No numbers: " + a;
    }
    i++
  } else {
    break;
 }
}

console.log(arr);

