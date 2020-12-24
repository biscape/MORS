const MusicPatchPcmStream = require('./musicPatchPcmStream.js');
const MusicPatchNode = require('./musicPatchNode.js');
const PcmStream = require('./pcmStream.js');
const MidiFileReader = require('./midiFileReader.js');
const NodeHashTable = require('./nodeHashTable.js');


class MidiPcmStream extends PcmStream {
	static obfuscatedClassName = "lx";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, MidiPcmStream.obfuscatedClassName);
	}

	getField7251(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"aa", []);
	}
	getField7253(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"ac", []);
	}
	getField7255(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"ae", ['int', 582689079]);
	}
	getField7256(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"af", []);
	}
	getField7257(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"ag", []);
	}
	getField7258(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"ah", []);
	}
	getField7260(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"aj", []);
	}
	getField7262(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"al", []);
	}
	getField7263(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"am", []);
	}
	getField7264(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"aq", []);
	}
	getField7265(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"as", []);
	}
	getField7267(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"au", []);
	}
	getMidiFile(){
		return new MidiFileReader(super.getField(MidiPcmStream.obfuscatedClassName,"bg", []));
	}
	getField7272(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"bh", ['int', 1880078497]);
	}
	getField7274(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"bj", ['int', 1443704637]);
	}
	getField7276(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"bp", []);
	}
	getField7277(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"bq", []);
	}
	getField7278(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"br", ['long', 9177733187008448005]);
	}
	getField7254(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"ad", []);
	}
	getField7259(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"ai", []);
	}
	getMusicPatches(){
		return new NodeHashTable(super.getField(MidiPcmStream.obfuscatedClassName,"ak", []));
	}
	getField7266(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"at", []);
	}
	getField7268(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"av", []);
	}
	getField7269(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"ax", []);
	}
	getField7273(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"bi", []);
	}
	getField7252(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"ab", []);
	}
	getField7270(){
		return  super.getField(MidiPcmStream.obfuscatedClassName,"bf", []);
	}
	getField7275(){
		return new MusicPatchPcmStream(super.getField(MidiPcmStream.obfuscatedClassName,"bk", []));
	}

	static onMethod13669(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod13672(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"ah", todo, []);
	}
	static onIsReady(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"am", todo, []);
	}
	static onMethod13678(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"an", todo, []);
	}
	static onClear(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"aq", todo, []);
	}
	static onMethod13687(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"aw", todo, []);
	}
	static onMethod13689(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"ay", todo, []);
	}
	static onMethod13694(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"bd", todo, []);
	}
	static onMethod13703(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"bm", todo, []);
	}
	static onMethod13707(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"bq", todo, []);
	}
	static onMethod13710(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"bt", todo, []);
	}
	static onMethod13735(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"cw", todo, []);
	}
	static onSkipSubStreams(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"ad", todo, []);
	}
	static onLoadMusicTrack(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"ai", todo, []);
	}
	static onSetPcmStreamVolume(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"ak", todo, []);
	}
	static onClearAll(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod13666(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"ab", todo, []);
	}
	static onMethod13701(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"bk", todo, []);
	}
	static onMethod13664(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"al", todo, []);
	}
	static onMethod13663(todo){
		super.onMethodExecution(MidiPcmStream.obfuscatedClassName,"ai", todo, []);
	}
}
module.exports = MidiPcmStream;
