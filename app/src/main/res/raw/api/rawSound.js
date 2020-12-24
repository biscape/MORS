const AbstractSound = require('./abstractSound.js');


class RawSound extends AbstractSound {
	static obfuscatedClassName = "hb";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, RawSound.obfuscatedClassName);
	}

	getSampleRate(){
		return  super.getField(RawSound.obfuscatedClassName,"ae", []);
	}
	getEnd(){
		return  super.getField(RawSound.obfuscatedClassName,"ah", []);
	}
	getField7198(){
		return  super.getField(RawSound.obfuscatedClassName,"as", []);
	}
	getSamples(){
		return  super.getField(RawSound.obfuscatedClassName,"ai", []);
	}
	getStart(){
		return  super.getField(RawSound.obfuscatedClassName,"ax", []);
	}

	static onResample(todo){
		super.onMethodExecution(RawSound.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = RawSound;
