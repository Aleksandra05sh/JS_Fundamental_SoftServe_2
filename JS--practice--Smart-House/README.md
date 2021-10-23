/*1. Выбрать первое устройство
   Кондиционер

2. Чертеж первого устройства
класс Сonditioner
      состояние
		_nanameme : String
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