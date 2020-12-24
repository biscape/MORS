const PcmPlayer = require('./pcmPlayer.js');
const Archive = require('./archive.js');
const Interceptor = require('./core/apicore.js');


class SoundSystem extends Interceptor {
	static obfuscatedClassName = "hj";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, SoundSystem.obfuscatedClassName);
	}

	static getField3242(){
		return new ScheduledExecutorService(super.getField(SoundSystem.obfuscatedClassName,"ax", []));
	}
	static getField3244(){
		return new Archive(super.getField(SoundSystem.obfuscatedClassName,"dl", []));
	}
	getPlayers(){
		return  super.getField(SoundSystem.obfuscatedClassName,"ak", []);
	}

	static onClear(todo){
		super.onMethodExecution(SoundSystem.obfuscatedClassName,"run", todo, []);
	}
	static onMethod5056(todo){
		super.onMethodExecution(SoundSystem.obfuscatedClassName,"fh", todo, []);
	}
}
module.exports = SoundSystem;
