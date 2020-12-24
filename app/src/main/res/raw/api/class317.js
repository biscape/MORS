const class384 = require('./class384.js');
const Node = require('./node.js');
const AbstractSocket = require('./abstractSocket.js');
const class259 = require('./class259.js');


class class317 extends Node {
	static obfuscatedClassName = "iv";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class317.obfuscatedClassName);
	}

	static getField6185(){
		return new class259(super.getField(class317.obfuscatedClassName,"rm", []));
	}
	static getField6184(){
		return  super.getField(class317.obfuscatedClassName,"gi", []);
	}
	static getField6183(){
		return new AbstractSocket(super.getField(class317.obfuscatedClassName,"eo", []));
	}
	getField6188(){
		return  super.getField(class317.obfuscatedClassName,"ae", ['int', 40330003]);
	}
	getField6189(){
		return  super.getField(class317.obfuscatedClassName,"af", []);
	}
	getField6190(){
		return  super.getField(class317.obfuscatedClassName,"ah", ['int', 1383579169]);
	}
	getField6192(){
		return  super.getField(class317.obfuscatedClassName,"aj", ['int', 305151269]);
	}
	getField6195(){
		return  super.getField(class317.obfuscatedClassName,"aq", ['int', 1017523553]);
	}
	getField6196(){
		return  super.getField(class317.obfuscatedClassName,"as", ['int', 334591741]);
	}
	getField6191(){
		return  super.getField(class317.obfuscatedClassName,"ai", ['int', 106891833]);
	}
	getField6193(){
		return  super.getField(class317.obfuscatedClassName,"ak", ['int', 1782613495]);
	}
	getField6197(){
		return  super.getField(class317.obfuscatedClassName,"ax", ['int', 1204343763]);
	}

	static onMethod11247(todo){
		super.onMethodExecution(class317.obfuscatedClassName,"ay", todo, []);
	}
}
module.exports = class317;
