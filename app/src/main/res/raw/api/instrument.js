const SoundEnvelope = require('./soundEnvelope.js');
const Interceptor = require('./core/apicore.js');
const AudioFilter = require('./audioFilter.js');


class Instrument extends Interceptor {
	static obfuscatedClassName = "hy";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Instrument.obfuscatedClassName);
	}

	static getInstrument_pitchSteps(){
		return  super.getField(Instrument.obfuscatedClassName,"ac", []);
	}
	static getInstrument_volumeSteps(){
		return  super.getField(Instrument.obfuscatedClassName,"ag", []);
	}
	static getInstrument_noise(){
		return  super.getField(Instrument.obfuscatedClassName,"ao", []);
	}
	static getInstrument_samples(){
		return  super.getField(Instrument.obfuscatedClassName,"ap", []);
	}
	static getInstrument_pitchBaseSteps(){
		return  super.getField(Instrument.obfuscatedClassName,"au", []);
	}
	static getInstrument_sine(){
		return  super.getField(Instrument.obfuscatedClassName,"az", []);
	}
	static getInstrument_delays(){
		return  super.getField(Instrument.obfuscatedClassName,"ad", []);
	}
	static getInstrument_phases(){
		return  super.getField(Instrument.obfuscatedClassName,"av", []);
	}
	getOscillatorVolume(){
		return  super.getField(Instrument.obfuscatedClassName,"aa", []);
	}
	getVolume(){
		return new SoundEnvelope(super.getField(Instrument.obfuscatedClassName,"ae", []));
	}
	getOscillatorDelays(){
		return  super.getField(Instrument.obfuscatedClassName,"af", []);
	}
	getField3335(){
		return new SoundEnvelope(super.getField(Instrument.obfuscatedClassName,"ah", []));
	}
	getField3337(){
		return new SoundEnvelope(super.getField(Instrument.obfuscatedClassName,"aj", []));
	}
	getField3339(){
		return new SoundEnvelope(super.getField(Instrument.obfuscatedClassName,"al", []));
	}
	getField3340(){
		return  super.getField(Instrument.obfuscatedClassName,"am", []);
	}
	getField3341(){
		return new AudioFilter(super.getField(Instrument.obfuscatedClassName,"an", []));
	}
	getField3342(){
		return  super.getField(Instrument.obfuscatedClassName,"aq", []);
	}
	getField3343(){
		return  super.getField(Instrument.obfuscatedClassName,"ar", []);
	}
	getField3344(){
		return new SoundEnvelope(super.getField(Instrument.obfuscatedClassName,"as", []));
	}
	getDuration(){
		return  super.getField(Instrument.obfuscatedClassName,"aw", []);
	}
	getField3347(){
		return new SoundEnvelope(super.getField(Instrument.obfuscatedClassName,"ay", []));
	}
	getField3336(){
		return new SoundEnvelope(super.getField(Instrument.obfuscatedClassName,"ai", []));
	}
	getPitch(){
		return new SoundEnvelope(super.getField(Instrument.obfuscatedClassName,"ak", []));
	}
	getField3346(){
		return new SoundEnvelope(super.getField(Instrument.obfuscatedClassName,"ax", []));
	}
	getOscillatorPitch(){
		return  super.getField(Instrument.obfuscatedClassName,"ab", []);
	}

	static onEvaluateWave(todo){
		super.onMethodExecution(Instrument.obfuscatedClassName,"ae", todo, []);
	}
	static onDecode(todo){
		super.onMethodExecution(Instrument.obfuscatedClassName,"ai", todo, []);
	}
	static onSynthesize(todo){
		super.onMethodExecution(Instrument.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = Instrument;
