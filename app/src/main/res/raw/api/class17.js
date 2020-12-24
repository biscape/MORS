const Interceptor = require('./core/apicore.js');


class class17 extends Interceptor {
	static obfuscatedClassName = "ay";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class17.obfuscatedClassName);
	}

	static getField310(){
		return new class17(super.getField(class17.obfuscatedClassName,"ae", []));
	}
	static getField314(){
		return  super.getField(class17.obfuscatedClassName,"aq", []);
	}
	static getField312(){
		return new class17(super.getField(class17.obfuscatedClassName,"ai", []));
	}
	static getField313(){
		return new class17(super.getField(class17.obfuscatedClassName,"ak", []));
	}
	static getField315(){
		return new class17(super.getField(class17.obfuscatedClassName,"ax", []));
	}
	getField317(){
		return  super.getField(class17.obfuscatedClassName,"ah", ['int', 1690360447]);
	}

	static onMethod341(todo){
		super.onMethodExecution(class17.obfuscatedClassName,"at", todo, []);
	}
	static onMethod342(todo){
		super.onMethodExecution(class17.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod344(todo){
		super.onMethodExecution(class17.obfuscatedClassName,"de", todo, []);
	}
}
module.exports = class17;
