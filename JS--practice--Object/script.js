'use strict'

/*Задание №1.
1. Создайте новый объект user;
2. Добавьте свойство name со значением Cris;
3. Добавьте свойство surname со значением Simons;
4. Поменяйте значение name на Brain;
5. Удалите свойство name из объекта;*/

var user = {
  name: "Cris",
  surname: "Simons",
};

user.name = "Brain";
delete user.name;


/*Задание №2.
1. Создайте новый объект car;
2. Добавьте свойство model с любым значением;
3. Добавьте свойство speed с любым значением;
4. Добавьте метод run(), который выводит сообщение: "model едет со скоростью speed";
5. Добавьте метод stop(), который вывод сообщение: "model остановилась";
Реализуйте 3 версии текущего задания, используя следующие синтаксисы создания объектов:
1. Стандартный;
2. Массивов;
3. Упрощенный.
*/

// 1. Стандартный;

var car = {};
car.model = "Mazda CX-5";
car.speed = 50;
car.run = function () {
  console.log(car.model + " едет со скоростью " + car.speed + " км/час");
};
car.stop = function() {
  car.speed = 0;
  console.log(car.model + " остановилась");
};
car.run();
car.stop();
console.log(car.speed);


// 2. Синтаксис массивов

var car = {};
car["model"] = "Toyota Rav4";
car["speed"] = 60;
car["run"] = function() {
  console.log(car.model + " едет со скоростью " + car.speed + " км/час");
}
car["stop"] = function() {
  car.speed = 0;
  console.log(car.model + " остановилась");
};

car["run"]();
car["stop"]();
console.log(car["speed"]);


// 3. Упроенный

var car = {
  model: "Nissan X-Trail",
  speed: 70,
  run: function() {
    console.log(car.model + " едет со скоростью " + car.speed + " км/час");
  },
  stop: function() {
    car.speed = 0;
    console.log(car.model + " остановилась")
  },
} 
  
car.run();
car.stop();
console.log(car.speed);


/*Задание №3.
1. Создайте новый объект tv;
2. Добавьте свойство currentChannel со значением 1;
3. Добавьте метод nextChannel(), который увеличивает currentChannel на единицу;
4. Добавьте метод previousChannel(), который уменьшает currentChannel на единицу;
5. Добавьте метод setChannel(number), который переходит на канал по номеру.*/



var tv = {
  currentChannel: 1,
  nextChannel: function() {
    tv.currentChannel = tv.currentChannel + 1;
  },
  previousChannel: function() {
    tv.currentChannel = tv.currentChannel - 1;
  },
  setChannel: function(number) {
    tv.currentChannel = number;
  },
}

console.log(tv.currentChannel);
tv.nextChannel();
tv.nextChannel();
tv.nextChannel();
console.log(tv.currentChannel);
tv.previousChannel();
console.log(tv.currentChannel);
tv.setChannel(12);
console.log(tv.currentChannel);



/*Задание №4.
Создайте объект, который описывает MP3 плеер.*/



var  mp3 = {
  isOn: false,
  isPlay: false,
  playList: [
    {
      singer: "Sting",
      title: "Desert of Rose",
    }, {
      singer: "Sting",
      title: "Shape of My Heart",
    }, {
      singer: "NK",
      title: "Красное вино",
    }, {
      singer: "Ed Sheeran",
      title: "Bad habits",
    }, {
      singer: "Imagine Dragons",
      title: "Wrecked",
    },
  ],

  favoriteSongs: [],

  currentSongNumber:0,


  onOff: function() {
    mp3.isOn = !mp3.isOn;
  },

  playStop: function() {
    mp3.isPlay = !mp3.isPlay;
  },

  nextSong: function() {
    mp3.currentSongNumber += 1;
    if (mp3.currentSongNumber > mp3.playList.length-1){
      mp3.currentSongNumber = 0;
    }
  },

  previousSong: function() {
    mp3.currentSongNumber -= 1;
    if (mp3.currentSongNumber < 0) {
      mp3.currentSongNumber = mp3.playList.length-1;
    }
  },

  getCurrentSongTitle: function() {
    console.log("Песня: " + mp3.playList[mp3.currentSongNumber].title);
  },

  getCurrentSongSinger: function() {
    console.log("Певец: " + mp3.playList[mp3.currentSongNumber].singer);
  },

  addToFavorite: function() {
    var isSongFavorite = false;

    for (var i = 0; i < mp3.favoriteSongs.length; i++) {
      if (mp3.playList[mp3.currentSongNumber].title === mp3.favoriteSongs[i].title) {
        isSongFavorite = true;
        break;
      } 
    }

    if (isSongFavorite === false) {
      mp3.favoriteSongs[mp3.favoriteSongs.length] = mp3.playList[mp3.currentSongNumber]
    }
  },

  playFavoriteSongs: function() {
    for(var i = 0; i < mp3.favoriteSongs.length; i++ ) {
      console.log(mp3.favoriteSongs[i]);
    }
  },

}

mp3.onOff();
mp3.playStop();
mp3.nextSong();
mp3.previousSong();
mp3.previousSong();
mp3.previousSong();
mp3.getCurrentSongSinger();
mp3.getCurrentSongTitle();
mp3.addToFavorite();
mp3.addToFavorite();
mp3.nextSong();
mp3.addToFavorite();
mp3.playFavoriteSongs();




/*Задание №5. Вложенные. Массивы в объектах
Опишите следующую информацию в виде иерархии массивов и объектов:*/

var team = [
    {
      name: "John",
      age: 28,
      experiance: 1,
      languages: ["Java", "JavaScript", "SQL"]
    }, {
      name: "Bill",
      age: 30,
      experiance: 5,
      languages: ["HTML", "CSS", "JavaScript"]
    }, {
      name: "Mike",
      age: 32,
      experiance: 4,
      languages: ["Python", "SQL"]
    },
  ];

// console.log(team[2].name);


/*Задание №6. Проверка наличия свойств и методов. Перебор свойств и методов
Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.*/


var user = {
  name: "Tom",
  age: 26,
  display: function () {
     console.log(user.name);
     console.log(user.age);
  }
};


function isEmpty(obj) {
  var isEmptyProperty = true;
  for (var key in obj) {
    var isEmptyProperty = false;
  }
  return isEmptyProperty;
}

console.log(isEmpty(user));


/*Задание №7. Перебор свойств и методов
Есть объект salaries с зарплатами. Напишите код, который выведет среднее значение всех зарплат. Код должен работать с различным количеством зарплат в объекте.
Примеры salaries:*/


var salaries1 = {
   John: 100,
   Bill: 300,
   Mike: 250
};

var salaries2 = {
   Cris: 150,
   Brain: 600,
   John: 300,
   Steve: 400,
   Bill: 50
};


function getAverageSalary(obj) {
  var totalSalary = 0;
  var amountWorkers = 0;
  for (var key in obj) {
    totalSalary = totalSalary + obj[key];
    amountWorkers += 1;
  }
  return totalSalary / amountWorkers
};

console.log(getAverageSalary(salaries2));










