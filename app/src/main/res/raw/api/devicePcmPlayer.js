const PcmPlayer = require('./pcmPlayer.js');


class DevicePcmPlayer extends PcmPlayer {
	static obfuscatedClassName = "hz";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, DevicePcmPlayer.obfuscatedClassName);
	}


	static onVmethod11139(todo){
		super.onMethodExecution(DevicePcmPlayer.obfuscatedClassName,"an", todo, []);
	}
	static onVmethod11140(todo){
		super.onMethodExecution(DevicePcmPlayer.obfuscatedClassName,"ar", todo, []);
	}
	static onVmethod11141(todo){
		super.onMethodExecution(DevicePcmPlayer.obfuscatedClassName,"aw", todo, []);
	}
	static onVmethod11142(todo){
		super.onMethodExecution(DevicePcmPlayer.obfuscatedClassName,"ay", todo, []);
	}
	static onVmethod11138(todo){
		super.onMethodExecution(DevicePcmPlayer.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = DevicePcmPlayer;
