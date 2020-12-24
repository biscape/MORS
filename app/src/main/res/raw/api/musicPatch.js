const MusicPatchNode2 = require('./musicPatchNode2.js');
const Node = require('./node.js');
const RawSound = require('./rawSound.js');


class MusicPatch extends Node {
	static obfuscatedClassName = "ll";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, MusicPatch.obfuscatedClassName);
	}

	getRawSounds(){
		return  super.getField(MusicPatch.obfuscatedClassName,"ae", []);
	}
	getField6349(){
		return  super.getField(MusicPatch.obfuscatedClassName,"ah", []);
	}
	getField6351(){
		return  super.getField(MusicPatch.obfuscatedClassName,"aj", []);
	}
	getField6353(){
		return  super.getField(MusicPatch.obfuscatedClassName,"al", []);
	}
	getField6354(){
		return  super.getField(MusicPatch.obfuscatedClassName,"as", []);
	}
	getField6350(){
		return  super.getField(MusicPatch.obfuscatedClassName,"ai", []);
	}
	getField6352(){
		return  super.getField(MusicPatch.obfuscatedClassName,"ak", ['int', 1489684637]);
	}
	getField6355(){
		return  super.getField(MusicPatch.obfuscatedClassName,"ax", []);
	}

	static onMethod11601(todo){
		super.onMethodExecution(MusicPatch.obfuscatedClassName,"ae", todo, []);
	}
	static onClear(todo){
		super.onMethodExecution(MusicPatch.obfuscatedClassName,"ai", todo, []);
	}
}
module.exports = MusicPatch;
