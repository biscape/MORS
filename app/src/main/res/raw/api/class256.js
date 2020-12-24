const Interceptor = require('./core/apicore.js');


class class256 extends Interceptor {
	static obfuscatedClassName = "pz";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class256.obfuscatedClassName);
	}

	static getField4353(){
		return  super.getField(class256.obfuscatedClassName,"aa", []);
	}
	static getField4354(){
		return new class256(super.getField(class256.obfuscatedClassName,"ae", []));
	}
	static getField4355(){
		return new class256(super.getField(class256.obfuscatedClassName,"ai", []));
	}
	static getField4356(){
		return new class256(super.getField(class256.obfuscatedClassName,"ak", []));
	}
	getValue(){
		return  super.getField(class256.obfuscatedClassName,"ax", ['int', 499637053]);
	}

}
module.exports = class256;
