const MidiPcmStream = require('./midiPcmStream.js');
const Interceptor = require('./core/apicore.js');


class class347 extends Interceptor {
	static obfuscatedClassName = "mv";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class347.obfuscatedClassName);
	}

	static getMidiPcmStream(){
		return new MidiPcmStream(super.getField(class347.obfuscatedClassName,"ax", []));
	}

	static onVmethod12071(todo){
		super.onMethodExecution(class347.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod12062(todo){
		super.onMethodExecution(class347.obfuscatedClassName,"al", todo, []);
	}
	static onMethod12063(todo){
		super.onMethodExecution(class347.obfuscatedClassName,"an", todo, []);
	}
}
module.exports = class347;
