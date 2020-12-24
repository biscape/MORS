const Node = require('./node.js');
const Widget = require('./widget.js');


class class312 extends Node {
	static obfuscatedClassName = "ie";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class312.obfuscatedClassName);
	}

	getField6164(){
		return  super.getField(class312.obfuscatedClassName,"aq", []);
	}
	getField6160(){
		return new Widget(super.getField(class312.obfuscatedClassName,"ai", []));
	}
	getField6162(){
		return  super.getField(class312.obfuscatedClassName,"ak", []);
	}

	static onMethod11213(todo){
		super.onMethodExecution(class312.obfuscatedClassName,"ae", todo, []);
	}
}
module.exports = class312;
