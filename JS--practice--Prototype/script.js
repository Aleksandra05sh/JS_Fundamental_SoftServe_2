"use strict"




/*Задание №1.
Создайте тип объектов MP3 при помощи прототипов*/

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
  };
  
Player.prototype.onOff = function() {
    this.isOn = !this.isOn;
  };

Player.prototype.playStop =  function() {
    this.isPlay = !this.isPlay;
  };

Player.prototype.nextSong = function() {
    if (this.currentSongNumber < this.playList.length-2){
      this.currentSongNumber += 1;
    }
    else {
      this.currentSongNumber = 0
    }
  };

Player.prototype.previousSong = function() {
    if (this.currentSongNumber === 0) {
      this.currentSongNumber = this.playList.length-1;
    } else {
      this.currentSongNumber -= 1;
    }
  };

Player.prototype.getCurrentSongTitle = function() {
  console.log(this.playList[this.currentSongNumber])
    console.log("Песня: " + this.playList[this.currentSongNumber].title);
  };

Player.prototype.getCurrentSongSinger = function() {
    console.log("Певец: " + this.playList[this.currentSongNumber].singer);
  };

Player.prototype.addToFavorite =  function() {
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

Player.prototype.playFavoriteSongs = function() {
    for(var i = 0; i < this.favoriteSongs.length; i++ ) {
      console.log(this.favoriteSongs[i]);
    }
  };


  var mp3 = new Player(playList);
//   console.dir(mp3)




  
