'use strict'


function Device(name) {
  this._name = name;
  this._state = false;
}

Device.prototype.getName = function() {
  return this._name;
};

Device.prototype.getState = function() {
  return this._state;
};

Device.prototype.on = function() {
  this._state = true;
};

Device.prototype.off = function() {
  this._state = false;
};




/*1. Выбрать первое устройство
   Кондиционер

2. Чертеж первого устройства
класс Сonditioner
  состояние
		_name : String
		_state : Boolean
		_currentMode : Number
		_modes: String[]   // heating, cooling, drying, ventilation
		_temperature: Number (14-40)


  поведение
    getName() : String
    getState() : Boolean
    on() : void
    off() : void
	  getCurrentMode(): String
	  changeMode() : void
    getTemperature() : Number
    increaseTemperature() : void
    decreaseTemperature() : void */
function AirConditioning(name) {
  Device.call(this, name);
  this._modes = ['heating', 'cooling', 'drying', 'ventilation'];
  this._currentMode = 1
  this._temperature = 20;
};


AirConditioning.prototype = Object.create(Device.prototype);
AirConditioning.prototype.constructor = AirConditioning;

AirConditioning.prototype.getCurrentMode = function() {
  return this._modes[this._currentMode];
};

AirConditioning.prototype.changeMode = function() {
  if (this._currentMode < this._modes.length - 1 ) {
    this._currentMode++;
  } else {
    this._currentMode = 0;
  }
};

AirConditioning.prototype.getTemperature = function() {
  return this._temperature;
};

AirConditioning.prototype.increaseTemperature = function() {
  if (this._temperature < 40) {
    this._temperature++
  }
};

AirConditioning.prototype.decreaseTemperature = function() {
  if (this._temperature > 14) {
    this._temperature--
  }
};

var air1 = new AirConditioning('tcl');

/*5. Чертеж второго устройства
класс TV
  состояние
		_name : String
		_state : Boolean
		_channel : Number
		_channelList: String[]   // 1+1 CТБ Интер Украина MusicBox
		_volume: Number (0-100)
		_isMute: Boolean
		_volumeBeforeMute: Number

  поведение
    getName() : String
    getState() : Boolean
    on() : void
    off() : void
	  getChannelName(): String
	  setChannel(number) : void
	  nextChannel: void
​​	  previousChannel: void
    getVolume():Number
    increaseVolume() : void
    decreaseVolume() : void
	  getMute(): Boolean
    mute() : void
    unmute() : void*/

function TV(name) {
  Device.call(this, name);
  this._channel = 1;
  this._channelList = ['1+1', 'CТБ', 'Интер', 'Украина', 'MusicBox'];
  this._volume = 20;
  this._isMute = false;
  this._volumeBeforeMute = this._volume;
};

TV.prototype = Object.create(Device.prototype);
TV.prototype.constructor = TV;

TV.prototype.getChannelName = function() {
  return this._channelList[this._channel - 1];
};

TV.prototype.setChannel = function(channelNumber) {
  if(this._chanellValid(channelNumber)) {
    this._channel = channelNumber;
  }
};

TV.prototype.nextChannel = function() {
  if (this._channel  < this._channelList.length) {
    this._channel++;
  } else {
    this._channel = 1;
  }
};

TV.prototype.previousChannel = function() {
  if (this._channel  > 1) {
    this._channel--;
  } else {
    this._channel = this._channelList.length - 1;
  }
};

TV.prototype.getVolume = function() {
  return this._volume;
};

TV.prototype.increaseVolume = function() {
  if (this._isMute) { 
    this.unmute();
  }
  if (this._volume < 100) {
    this._volume++;
  }
};

TV.prototype.decreaseVolume = function() {
  if (this._isMute) {
    this.unmute();
  }
  if (this._volume > 0) {
    this._volume--;
  }
};

TV.prototype.getMute = function() {
  return this._isMute;
};

TV.prototype.mute = function() {
  if (!this._isMute) {
    this._volumeBeforeMute = this._volume;
    this._isMute = true;
    this._volume = 0;
  }
}

TV.prototype.unmute = function() {
  if (this._isMute){
    this._volume = this._volumeBeforeMute;
    this._isMute = false;
  }
}


TV.prototype._chanellValid = function(channelNumber) {
  if (typeof channelNumber === "number" && Number.isInteger(channelNumber) && channelNumber > 0 && channelNumber <= this._channelList.length ) {
    return true;
  }
}

var tv1 = new TV('sumsung')

