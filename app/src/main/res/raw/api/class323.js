const Node = require('./node.js');
const Widget = require('./widget.js');
const NodeHashTable = require('./nodeHashTable.js');


class class323 extends Node {
	static obfuscatedClassName = "jy";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class323.obfuscatedClassName);
	}

	static getField6263(){
		return  super.getField(class323.obfuscatedClassName,"aj", ['int', 274064701]);
	}
	static getField6265(){
		return  super.getField(class323.obfuscatedClassName,"mm", []);
	}
	static getField6264(){
		return new NodeHashTable(super.getField(class323.obfuscatedClassName,"ak", []));
	}

	static onMethod11428(todo){
		super.onMethodExecution(class323.obfuscatedClassName,"aj", todo, []);
	}
	static onMethod11429(todo){
		super.onMethodExecution(class323.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod11430(todo){
		super.onMethodExecution(class323.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class323;
