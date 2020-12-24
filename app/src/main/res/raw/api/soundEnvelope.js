const Interceptor = require('./core/apicore.js');


class SoundEnvelope extends Interceptor {
	static obfuscatedClassName = "hi";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, SoundEnvelope.obfuscatedClassName);
	}

	getStep(){
		return  super.getField(SoundEnvelope.obfuscatedClassName,"aa", []);
	}
	getDurations(){
		return  super.getField(SoundEnvelope.obfuscatedClassName,"ae", []);
	}
	getMax(){
		return  super.getField(SoundEnvelope.obfuscatedClassName,"af", []);
	}
	getField3234(){
		return  super.getField(SoundEnvelope.obfuscatedClassName,"ah", []);
	}
	getTicks(){
		return  super.getField(SoundEnvelope.obfuscatedClassName,"aj", []);
	}
	getPhaseIndex(){
		return  super.getField(SoundEnvelope.obfuscatedClassName,"al", []);
	}
	getField3239(){
		return  super.getField(SoundEnvelope.obfuscatedClassName,"as", []);
	}
	getPhases(){
		return  super.getField(SoundEnvelope.obfuscatedClassName,"ai", []);
	}
	getSegments(){
		return  super.getField(SoundEnvelope.obfuscatedClassName,"ak", []);
	}
	getField3240(){
		return  super.getField(SoundEnvelope.obfuscatedClassName,"ax", []);
	}
	getAmplitude(){
		return  super.getField(SoundEnvelope.obfuscatedClassName,"ab", []);
	}

	static onMethod5046(todo){
		super.onMethodExecution(SoundEnvelope.obfuscatedClassName,"ae", todo, []);
	}
	static onReset(todo){
		super.onMethodExecution(SoundEnvelope.obfuscatedClassName,"ai", todo, []);
	}
	static onDecode(todo){
		super.onMethodExecution(SoundEnvelope.obfuscatedClassName,"ak", todo, []);
	}
	static onDoStep(todo){
		super.onMethodExecution(SoundEnvelope.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = SoundEnvelope;
