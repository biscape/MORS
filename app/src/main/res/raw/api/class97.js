const Interceptor = require('./core/apicore.js');
const AbstractArchive = require('./abstractArchive.js');


class class97 extends Interceptor {
	static obfuscatedClassName = "go";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class97.obfuscatedClassName);
	}

	static getWidget_spritesArchive(){
		return new AbstractArchive(super.getField(class97.obfuscatedClassName,"af", []));
	}
	static getField2747(){
		return  super.getField(class97.obfuscatedClassName,"ah", ['int', 1581473365]);
	}
	static getField2748(){
		return  super.getField(class97.obfuscatedClassName,"an", []);
	}
	static getField2749(){
		return  super.getField(class97.obfuscatedClassName,"dw", []);
	}

}
module.exports = class97;
