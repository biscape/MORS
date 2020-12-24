const NodeDeque = require('./nodeDeque.js');
const PcmStream = require('./pcmStream.js');


class PcmStreamMixer extends PcmStream {
	static obfuscatedClassName = "hd";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, PcmStreamMixer.obfuscatedClassName);
	}

	getField7200(){
		return new NodeDeque(super.getField(PcmStreamMixer.obfuscatedClassName,"ae", []));
	}
	getField7201(){
		return  super.getField(PcmStreamMixer.obfuscatedClassName,"ai", []);
	}
	getSubStreams(){
		return new NodeDeque(super.getField(PcmStreamMixer.obfuscatedClassName,"ak", []));
	}
	getField7203(){
		return  super.getField(PcmStreamMixer.obfuscatedClassName,"ax", []);
	}

	static onRemoveSubStream(todo){
		super.onMethodExecution(PcmStreamMixer.obfuscatedClassName,"ae", todo, []);
	}
	static onAddSubStream(todo){
		super.onMethodExecution(PcmStreamMixer.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = PcmStreamMixer;
