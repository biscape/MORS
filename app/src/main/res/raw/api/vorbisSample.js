const VorbisResidue = require('./vorbisResidue.js');
const VorbisMapping = require('./vorbisMapping.js');
const VorbisCodebook = require('./vorbisCodebook.js');
const VorbisFloor = require('./vorbisFloor.js');
const Node = require('./node.js');


class VorbisSample extends Node {
	static obfuscatedClassName = "hk";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, VorbisSample.obfuscatedClassName);
	}

	static getVorbisSample_bitOffset(){
		return  super.getField(VorbisSample.obfuscatedClassName,"aa", []);
	}
	static getField6108(){
		return  super.getField(VorbisSample.obfuscatedClassName,"ac", []);
	}
	static getVorbisSample_blockSize1(){
		return  super.getField(VorbisSample.obfuscatedClassName,"af", []);
	}
	static getField6111(){
		return  super.getField(VorbisSample.obfuscatedClassName,"ag", []);
	}
	static getVorbisSample_bytes(){
		return  super.getField(VorbisSample.obfuscatedClassName,"aj", []);
	}
	static getVorbisSample_byteOffset(){
		return  super.getField(VorbisSample.obfuscatedClassName,"al", []);
	}
	static getVorbisSample_floors(){
		return  super.getField(VorbisSample.obfuscatedClassName,"am", []);
	}
	static getVorbisSample_residues(){
		return  super.getField(VorbisSample.obfuscatedClassName,"an", []);
	}
	static getField6116(){
		return  super.getField(VorbisSample.obfuscatedClassName,"ap", []);
	}
	static getVorbisSample_codebooks(){
		return  super.getField(VorbisSample.obfuscatedClassName,"aq", []);
	}
	static getVorbisSample_mapping(){
		return  super.getField(VorbisSample.obfuscatedClassName,"ar", []);
	}
	static getField6119(){
		return  super.getField(VorbisSample.obfuscatedClassName,"au", []);
	}
	static getVorbisSample_blockFlags(){
		return  super.getField(VorbisSample.obfuscatedClassName,"aw", []);
	}
	static getVorbisSample_mappings(){
		return  super.getField(VorbisSample.obfuscatedClassName,"ay", []);
	}
	static getField6123(){
		return  super.getField(VorbisSample.obfuscatedClassName,"bg", []);
	}
	static getField6125(){
		return  super.getField(VorbisSample.obfuscatedClassName,"bj", []);
	}
	static getField6126(){
		return  super.getField(VorbisSample.obfuscatedClassName,"bp", []);
	}
	static getField6109(){
		return  super.getField(VorbisSample.obfuscatedClassName,"ad", []);
	}
	static getField6124(){
		return  super.getField(VorbisSample.obfuscatedClassName,"bi", []);
	}
	static getVorbisSample_blockSize0(){
		return  super.getField(VorbisSample.obfuscatedClassName,"ab", []);
	}
	static getField6122(){
		return  super.getField(VorbisSample.obfuscatedClassName,"bf", []);
	}
	getSampleRate(){
		return  super.getField(VorbisSample.obfuscatedClassName,"ae", []);
	}
	getEnd(){
		return  super.getField(VorbisSample.obfuscatedClassName,"ah", []);
	}
	getField6131(){
		return  super.getField(VorbisSample.obfuscatedClassName,"ao", []);
	}
	getField6132(){
		return  super.getField(VorbisSample.obfuscatedClassName,"as", []);
	}
	getField6136(){
		return  super.getField(VorbisSample.obfuscatedClassName,"az", []);
	}
	getSamples(){
		return  super.getField(VorbisSample.obfuscatedClassName,"bh", []);
	}
	getField6138(){
		return  super.getField(VorbisSample.obfuscatedClassName,"bq", []);
	}
	getField6139(){
		return  super.getField(VorbisSample.obfuscatedClassName,"br", []);
	}
	getSampleCount(){
		return  super.getField(VorbisSample.obfuscatedClassName,"ai", []);
	}
	getField6130(){
		return  super.getField(VorbisSample.obfuscatedClassName,"ak", []);
	}
	getField6133(){
		return  super.getField(VorbisSample.obfuscatedClassName,"at", []);
	}
	getField6134(){
		return  super.getField(VorbisSample.obfuscatedClassName,"av", []);
	}
	getStart(){
		return  super.getField(VorbisSample.obfuscatedClassName,"ax", []);
	}

	static onRead(todo){
		super.onMethodExecution(VorbisSample.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod11125(todo){
		super.onMethodExecution(VorbisSample.obfuscatedClassName,"aj", todo, []);
	}
	static onToRawSound(todo){
		super.onMethodExecution(VorbisSample.obfuscatedClassName,"ab", todo, []);
	}
	static onReadMusicSample(todo){
		super.onMethodExecution(VorbisSample.obfuscatedClassName,"aa", todo, []);
	}
	static onVorbisSample_setData(todo){
		super.onMethodExecution(VorbisSample.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod11105(todo){
		super.onMethodExecution(VorbisSample.obfuscatedClassName,"al", todo, []);
	}
	static onMethod11112(todo){
		super.onMethodExecution(VorbisSample.obfuscatedClassName,"as", todo, []);
	}
	static onReadBit(todo){
		super.onMethodExecution(VorbisSample.obfuscatedClassName,"ai", todo, []);
	}
	static onFloat32Unpack(todo){
		super.onMethodExecution(VorbisSample.obfuscatedClassName,"ak", todo, []);
	}
	static onReadBits(todo){
		super.onMethodExecution(VorbisSample.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = VorbisSample;
