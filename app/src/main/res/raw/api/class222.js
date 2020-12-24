const Interceptor = require('./core/apicore.js');


class class222 extends Interceptor {
	static obfuscatedClassName = "od";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class222.obfuscatedClassName);
	}

	static getWidget_loadedInterfaces(){
		return  super.getField(class222.obfuscatedClassName,"al", []);
	}

}
module.exports = class222;
