const IndexedSprite = require('./indexedSprite.js');
const Interceptor = require('./core/apicore.js');


class class55 extends Interceptor {
	static obfuscatedClassName = "dt";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class55.obfuscatedClassName);
	}

	static getField2409(){
		return  super.getField(class55.obfuscatedClassName,"tl", ['int', 323024077]);
	}
	static getField2410(){
		return new IndexedSprite(super.getField(class55.obfuscatedClassName,"ua", []));
	}

}
module.exports = class55;
