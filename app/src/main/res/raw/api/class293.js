const Archive = require('./archive.js');
const class184 = require('./class184.js');


class class293 extends class184 {
	static obfuscatedClassName = "eu";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class293.obfuscatedClassName);
	}

	static getField5999(){
		return new Archive(super.getField(class293.obfuscatedClassName,"dw", []));
	}

	static onMethod10842(todo){
		super.onMethodExecution(class293.obfuscatedClassName,"ah", todo, []);
	}
}
module.exports = class293;
