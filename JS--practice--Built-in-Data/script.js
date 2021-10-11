/*Data. Задание №1.
Напишите функцию addTwoDays(date), которая принимает объект типа Date и добавляет к дате данного объекта два дня.*/
var currentDate = new Date();
console.log(currentDate);


function addTwoDays(date) {
	var hours = date.getHours();
	console.log(hours);
	date.setHours(48 + hours);
	return date;
}

console.log(addTwoDays(currentDate));

