const Interceptor = require('./core/apicore.js');


class class227 extends Interceptor {
	static obfuscatedClassName = "oj";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class227.obfuscatedClassName);
	}

	static getPcmSampleLength(){
		return  super.getField(class227.obfuscatedClassName,"ab", ['int', 1760277427]);
	}

}
module.exports = class227;
