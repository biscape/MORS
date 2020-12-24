const Interceptor = require('./core/apicore.js');
const Archive = require('./archive.js');


class class298 extends Interceptor {
	static obfuscatedClassName = "fo";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class298.obfuscatedClassName);
	}

	static getField6041(){
		return  super.getField(class298.obfuscatedClassName,"ff", []);
	}
	static getField6040(){
		return new Archive(super.getField(class298.obfuscatedClassName,"dd", []));
	}

	static onVmethod10991(todo){
		super.onMethodExecution(class298.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod10981(todo){
		super.onMethodExecution(class298.obfuscatedClassName,"au", todo, []);
	}
	static onMethod10980(todo){
		super.onMethodExecution(class298.obfuscatedClassName,"ai", todo, []);
	}
}
module.exports = class298;
