'use strict'

/*Инкапсуляция. Задание №1.
Создайте тип объектов Аудиоплеер, в котором есть приватное свойство громкость звука, для доступа к этому свойству реализуйте: 
1. Методы геттер и сеттер;
2. Единый метод геттер-сеттер. 
Громкость может быть в диапазоне от 0 до 100.*/


function Player() {
  this._volume = 0;
}

Player.prototype.getVolume = function() {
  return this._volume;
}

Player.prototype.setVolume = function(unverifiedVolume) {
  if (this._volumeValid(unverifiedVolume)) {
    this._volume = unverifiedVolume;
  }
}

Player.prototype.volume = function(unverifiedVolume) {
  if (unverifiedVolume === undefined) {
    return this._volume;
  } else {
    if (this._volumeValid(unverifiedVolume)) {
      this._volume = unverifiedVolume;
    }
  }
}

Player.prototype._volumeValid = function(checkRange) {
  if (checkRange >= 0 && checkRange <= 100) {
    return true;
  } else {
    return false;
  }
}

var player = new Player();
// console.log(player.volume(100));
// console.log(player.volume());




/* Инкасуляция Задание №2.
Создайте тип объектов Сумматор, со следующим функционалом:
1. Приватное свойство __firstNumber;
2. Приватное свойство __secondNumber;
3. Публичное свойство result;
4. Приватный метод __calc(), который записывает в result сумму свойств __firstNumber и __secondNumber;
5. Единые методы геттер-сеттер для свойств __firstNumber и __secondNumber, во время работы методов как сеттер, должна происходить валидация (устанавливать можно только значения типа Number), если валидация происходит успешно, должен вызываться метод __calc(). Получается, что при успешной установке либо __firstNumber либо __secondNumber, происходит перерасчет result.*/

function Adder() {
  this.__firstNumber = 0;
  this.__secondNumber = 0;
  this.result = 0;
}


Adder.prototype.firstNumber = function(firstNumber) {
  if (firstNumber === undefined) {
    return this.__firstNumber;
  } else {
    if (this.__numberValid(firstNumber)) {
      this.__firstNumber = firstNumber;
      return this.__calc();
    }
  }
}

Adder.prototype.secondNumber = function(secondNumber) {
  if (secondNumber === undefined) {
    return this.__secondNumber;
  } else {
    if (this.__numberValid(secondNumber)) {
      this.__secondNumber = secondNumber;
      return this.__calc();
    }
  }
}

Adder.prototype.__calc = function() {
  this.result = this.__firstNumber + this.__secondNumber;
}

Adder.prototype.__numberValid = function(value) {
  if (typeof value === "number" && !isNaN(value) && isFinite(value)) {
    return true;
  } else {
    return false;
  }
}

var add = new Adder();


