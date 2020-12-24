const class173 = require('./class173.js');
const Interceptor = require('./core/apicore.js');


class class181 extends Interceptor {
	static obfuscatedClassName = "lz";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class181.obfuscatedClassName);
	}

	static getField3830(){
		return new class173(super.getField(class181.obfuscatedClassName,"ak", []));
	}

}
module.exports = class181;
