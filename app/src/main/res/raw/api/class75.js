const Interceptor = require('./core/apicore.js');
const class184 = require('./class184.js');


class class75 extends Interceptor {
	static obfuscatedClassName = "fm";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class75.obfuscatedClassName);
	}

	getField2545(){
		return new class184(super.getField(class75.obfuscatedClassName,"ak", []));
	}

}
module.exports = class75;
