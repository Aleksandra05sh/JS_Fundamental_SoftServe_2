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

function SmartHouse(name) {
  this._name = name;
  this._devices = [];
};

SmartHouse.prototype.getName = function(){
  return this._name ;
};

SmartHouse.prototype.addDevice = function(device) {
  if (this.getDeviceByName(device.getName())){
    alert("Device already Exists");
  } else {
    this._devices.push(device);
  }
};

SmartHouse.prototype.getDevices = function() {
  return this._devices;
};

SmartHouse.prototype.getDeviceByName = function(name) {
  var deviceArr = this._devices.filter(function(item) {
    return item.getName() === name;
  })
  return deviceArr[0];
}

SmartHouse.prototype.deleteDeviceByName = function(name) {
  var index = this._devices.indexOf(this.getDeviceByName(name));
  this._devices.splice(index, 1);
};

SmartHouse.prototype.offAllDevice = function() {
  this._devices.forEach(function(item) {
    item.off();
  })
};

SmartHouse.prototype.delayedOff1 = function(name, delay){
  var getDeviceByNameBind = this.getDeviceByName.bind(this)

  setTimeout(function() {
    getDeviceByNameBind(name).off();
    console.log('DONE');
  }, delay);
}

var sh = new SmartHouse('name1');
sh.addDevice(new AirConditioning("AirCond1"));
sh.addDevice(new AirConditioning("AirCond2"));
sh.addDevice(new TV("TV1"));
console.log(sh.getDevices());
console.log(sh.getDeviceByName("AirCond1"));
sh.getDeviceByName("AirCond1").on();
console.log(sh.getDeviceByName("AirCond1"));
sh.getDeviceByName("AirCond2").on();
console.log(sh.getDeviceByName("AirCond2"));
sh.deleteDeviceByName("AirCond1")
console.log(sh.getDevices());
sh.offAllDevice();
console.log(sh.getDevices());
sh.addDevice(new AirConditioning("AirCond2"));
sh.getDeviceByName("TV1").on();
console.log(sh.getDevices());


