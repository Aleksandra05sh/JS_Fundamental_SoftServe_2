'use strict'

function AirConditioning(name) {
  this._name = name;
  this._state = false;
  this._modes = ['heating', 'cooling', 'drying', 'ventilation'];
  this._currentMode = 1
  this._temperature = 20;
};

AirConditioning.prototype.getName = function() {
  return this._name;
};
AirConditioning.prototype.getState = function() {
  return this._state;
};
AirConditioning.prototype.on = function() {
  this._state = true;
};
AirConditioning.prototype.off = function() {
  this._state = false;
};
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

var air1 = new AirConditioning('sumsung');
