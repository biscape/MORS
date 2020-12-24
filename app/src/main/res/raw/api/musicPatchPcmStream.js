const NodeDeque = require('./nodeDeque.js');
const MidiPcmStream = require('./midiPcmStream.js');
const PcmStream = require('./pcmStream.js');
const PcmStreamMixer = require('./pcmStreamMixer.js');


class MusicPatchPcmStream extends PcmStream {
	static obfuscatedClassName = "lc";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, MusicPatchPcmStream.obfuscatedClassName);
	}

	getQueue(){
		return new NodeDeque(super.getField(MusicPatchPcmStream.obfuscatedClassName,"ae", []));
	}
	getMixer(){
		return new PcmStreamMixer(super.getField(MusicPatchPcmStream.obfuscatedClassName,"ai", []));
	}
	getSuperStream(){
		return new MidiPcmStream(super.getField(MusicPatchPcmStream.obfuscatedClassName,"ak", []));
	}

}
module.exports = MusicPatchPcmStream;
