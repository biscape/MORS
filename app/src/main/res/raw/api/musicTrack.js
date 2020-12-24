const Node = require('./node.js');
const NodeHashTable = require('./nodeHashTable.js');


class MusicTrack extends Node {
	static obfuscatedClassName = "lm";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, MusicTrack.obfuscatedClassName);
	}

	getMidi(){
		return  super.getField(MusicTrack.obfuscatedClassName,"ae", []);
	}
	getTable(){
		return new NodeHashTable(super.getField(MusicTrack.obfuscatedClassName,"ak", []));
	}

	static onMethod11605(todo){
		super.onMethodExecution(MusicTrack.obfuscatedClassName,"ae", todo, []);
	}
	static onClear(todo){
		super.onMethodExecution(MusicTrack.obfuscatedClassName,"ai", todo, []);
	}
	static onReadTrack(todo){
		super.onMethodExecution(MusicTrack.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = MusicTrack;
