const Interceptor = require('./core/apicore.js');


class class360 extends Interceptor {
	static obfuscatedClassName = "pg";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class360.obfuscatedClassName);
	}

	static getField6559(){
		return new class360(super.getField(class360.obfuscatedClassName,"ae", []));
	}
	static getField6560(){
		return new class360(super.getField(class360.obfuscatedClassName,"ai", []));
	}
	static getField6561(){
		return new class360(super.getField(class360.obfuscatedClassName,"ak", []));
	}
	static getField6562(){
		return new class360(super.getField(class360.obfuscatedClassName,"ax", []));
	}
	getField6563(){
		return  super.getField(class360.obfuscatedClassName,"ah", ['int', 323216443]);
	}
	getField6564(){
		return  super.getField(class360.obfuscatedClassName,"as", ['int', 1514576459]);
	}

	static onVmethod12178(todo){
		super.onMethodExecution(class360.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class360;
