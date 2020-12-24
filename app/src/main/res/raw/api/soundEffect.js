const Instrument = require('./instrument.js');
const Interceptor = require('./core/apicore.js');


class SoundEffect extends Interceptor {
	static obfuscatedClassName = "hw";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, SoundEffect.obfuscatedClassName);
	}

	getInstruments(){
		return  super.getField(SoundEffect.obfuscatedClassName,"ae", []);
	}
	getField3319(){
		return  super.getField(SoundEffect.obfuscatedClassName,"ai", []);
	}
	getField3320(){
		return  super.getField(SoundEffect.obfuscatedClassName,"ax", []);
	}

	static onToRawSound(todo){
		super.onMethodExecution(SoundEffect.obfuscatedClassName,"ae", todo, []);
	}
	static onMix(todo){
		super.onMethodExecution(SoundEffect.obfuscatedClassName,"ax", todo, []);
	}
	static onReadSoundEffect(todo){
		super.onMethodExecution(SoundEffect.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = SoundEffect;
