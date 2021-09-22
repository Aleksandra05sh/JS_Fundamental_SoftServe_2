'use strict'

/*Задание №1.
Создайте объект calculator с тремя методами:
1. read() запрашивает два значения при помощи prompt() и сохраняет их в свойствах объекта;
2. sum() возвращает сумму этих двух значений;
3. mul() возвращает произведение этих двух значений.
var calculator = {
   // Ваш код
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());*/



var calculator = {
  fistNumber: 1,
  secondNumber: 1,

  read: function() {
    var checkFirstNumber = Number(prompt("Введите первое значение", 1));

    if (typeof checkFirstNumber === "number" && !isNaN(checkFirstNumber)) {
      this.fistNumber = checkFirstNumber;
    }

    var checkSecondNumber = Number(prompt("Введите второе значение", 1));
    
    if (typeof checkSecondNumber === "number" && !isNaN(checkSecondNumber)) {
      this.secondNumber = checkSecondNumber;
    }
  },

  sum: function() {
      return this.fistNumber + this.secondNumber;
  },

  mul: function() {
      return this.fistNumber * this.secondNumber;
  },
 };


// calculator.read();
// console.log(calculator.mul());
// console.log(calculator.sum());



/* Объекты в функциях
Задание №1.
Напишите функцию для создания объектов, которые описывают MP3 плеер.*/
var playList =[
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
];



function createMp3(playList)  {
  return {
    isOn: false,
    isPlay: false,
    playList: playList,
    favoriteSongs: [],
    currentSongNumber:0,

    onOff: function() {
      this.isOn = !this.isOn;
    },

    playStop: function() {
      this.isPlay = !this.isPlay;
    },

    nextSong: function() {
      this.currentSongNumber += 1;
      if (this.currentSongNumber > this.playList.length-1){
        this.currentSongNumber = 0;
      }
    },

    previousSong: function() {
      this.currentSongNumber -= 1;
      if (this.currentSongNumber < 0) {
        this.currentSongNumber = this.playList.length-1;
      }
    },

    getCurrentSongTitle: function() {
      console.log("Песня: " + this.playList[this.currentSongNumber].title);
    },

    getCurrentSongSinger: function() {
      console.log("Певец: " + this.playList[this.currentSongNumber].singer);
    },

    addToFavorite: function() {
      var isSongFavorite = false;

      for (var i = 0; i < this.favoriteSongs.length; i++) {
        if (this.playList[this.currentSongNumber].title === this.favoriteSongs[i].title) {
          isSongFavorite = true;
          break;
        } 
      }

      if (isSongFavorite === false) {
        this.favoriteSongs[this.favoriteSongs.length] = this.playList[this.currentSongNumber]
      }
    },

    playFavoriteSongs: function() {
      for(var i = 0; i < this.favoriteSongs.length; i++ ) {
        console.log(this.favoriteSongs[i]);
      }
    },
  }
};

var mp3 = createMp3(playList);


/*Задание №2.
Напишите функцию, которая принимает в качестве параметра объект salaries с зарплатами и возвращает значение максимальной из зарплат.
Код должен работать с различным количеством зарплат в объекте.
Примеры salaries:
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
};*/

var salaries1 = {
  John: 100,
  Bill: 300,
  Mike: 250,
};

var salaries2 = {
  Cris: 150,
  Brain: 600,
  John: 300,
  Steve: 400,
  Bill: 50,
};



function getMaxSalary(obj) {
  var maxSalaryPredict = 0;

  for (var key in obj) {
    if (obj[key] > maxSalaryPredict) {
      maxSalaryPredict = obj[key];
    }
  }

  return maxSalaryPredict;
};

console.log(getMaxSalary(salaries1));
console.log(getMaxSalary(salaries2));



/* Конcтрукторы объектов
Задание №1.
Создайте тип объектов MP3 при помощи конструкторов объектов.*/

var playList =[
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
];

function Player(playList) {
  this.isOn = false;
  this.isPlay = false;
  this.playList = playList;
  this.favoriteSongs = [];
  this.currentSongNumber = 0;

  this.onOff = function() {
    this.isOn = !this.isOn;
  };

  this.playStop =  function() {
    this.isPlay = !this.isPlay;
  };

  this.nextSong = function() {
    this.currentSongNumber += 1;
    if (this.currentSongNumber > this.playList.length-1){
      this.currentSongNumber = 0;
    }
  };
  
  this.previousSong = function() {
    this.currentSongNumber -= 1;
    if (this.currentSongNumber < 0) {
      this.currentSongNumber = this.playList.length-1;
    }
  };

  this.getCurrentSongTitle = function() {
    console.log("Песня: " + this.playList[this.currentSongNumber].title);
  };

  this.getCurrentSongSinger = function() {
    console.log("Певец: " + this.playList[this.currentSongNumber].singer);
  };

  this.addToFavorite =  function() {
    var isSongFavorite = false;
    
    for (var i = 0; i < this.favoriteSongs.length; i++) {
      if (this.playList[this.currentSongNumber].title === this.favoriteSongs[i].title) {
        isSongFavorite = true;
        break;
      } 
    }
    
    if (isSongFavorite === false) {
      this.favoriteSongs[this.favoriteSongs.length] = this.playList[this.currentSongNumber]
    }
  };

  this.playFavoriteSongs = function() {
    for(var i = 0; i < this.favoriteSongs.length; i++ ) {
      console.log(this.favoriteSongs[i]);
    }
  };

};


var mp3 = new Player(playList);































