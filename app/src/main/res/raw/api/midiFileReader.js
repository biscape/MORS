const Buffer = require('./buffer.js');
const Interceptor = require('./core/apicore.js');


class MidiFileReader extends Interceptor {
	static obfuscatedClassName = "lw";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, MidiFileReader.obfuscatedClassName);
	}

	static getField3814(){
		return  super.getField(MidiFileReader.obfuscatedClassName,"ab", []);
	}
	getField3820(){
		return  super.getField(MidiFileReader.obfuscatedClassName,"aa", []);
	}
	getField3821(){
		return  super.getField(MidiFileReader.obfuscatedClassName,"ae", []);
	}
	getTrackLengths(){
		return  super.getField(MidiFileReader.obfuscatedClassName,"ah", []);
	}
	getField3824(){
		return  super.getField(MidiFileReader.obfuscatedClassName,"aj", []);
	}
	getField3826(){
		return  super.getField(MidiFileReader.obfuscatedClassName,"as", []);
	}
	getTrackStarts(){
		return  super.getField(MidiFileReader.obfuscatedClassName,"ai", []);
	}
	getBuffer(){
		return new Buffer(super.getField(MidiFileReader.obfuscatedClassName,"ak", []));
	}
	getTrackPositions(){
		return  super.getField(MidiFileReader.obfuscatedClassName,"ax", []);
	}

	static onReadMessage(todo){
		super.onMethodExecution(MidiFileReader.obfuscatedClassName,"aa", todo, []);
	}
	static onClear(todo){
		super.onMethodExecution(MidiFileReader.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod6557(todo){
		super.onMethodExecution(MidiFileReader.obfuscatedClassName,"af", todo, []);
	}
	static onGotoTrack(todo){
		super.onMethodExecution(MidiFileReader.obfuscatedClassName,"ah", todo, []);
	}
	static onSetTrackDone(todo){
		super.onMethodExecution(MidiFileReader.obfuscatedClassName,"aj", todo, []);
	}
	static onReadTrackLength(todo){
		super.onMethodExecution(MidiFileReader.obfuscatedClassName,"al", todo, []);
	}
	static onGetPrioritizedTrack(todo){
		super.onMethodExecution(MidiFileReader.obfuscatedClassName,"am", todo, []);
	}
	static onIsDone(todo){
		super.onMethodExecution(MidiFileReader.obfuscatedClassName,"an", todo, []);
	}
	static onMethod6568(todo){
		super.onMethodExecution(MidiFileReader.obfuscatedClassName,"aq", todo, []);
	}
	static onMarkTrackPosition(todo){
		super.onMethodExecution(MidiFileReader.obfuscatedClassName,"as", todo, []);
	}
	static onIsReady(todo){
		super.onMethodExecution(MidiFileReader.obfuscatedClassName,"ai", todo, []);
	}
	static onParse(todo){
		super.onMethodExecution(MidiFileReader.obfuscatedClassName,"ak", todo, []);
	}
	static onTrackCount(todo){
		super.onMethodExecution(MidiFileReader.obfuscatedClassName,"ax", todo, []);
	}
	static onReadMessage0(todo){
		super.onMethodExecution(MidiFileReader.obfuscatedClassName,"ab", todo, []);
	}
}
module.exports = MidiFileReader;
