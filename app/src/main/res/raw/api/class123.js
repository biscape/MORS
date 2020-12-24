const Interceptor = require('./core/apicore.js');


class class123 extends Interceptor {
	static obfuscatedClassName = "ih";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class123.obfuscatedClassName);
	}

	static getField3410(){
		return  super.getField(class123.obfuscatedClassName,"ri", []);
	}
	static getField3407(){
		return new BigInteger(super.getField(class123.obfuscatedClassName,"ae", []));
	}
	static getField3408(){
		return new BigInteger(super.getField(class123.obfuscatedClassName,"ak", []));
	}

}
module.exports = class123;
