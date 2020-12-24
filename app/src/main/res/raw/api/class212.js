const IndexedSprite = require('./indexedSprite.js');
const Interceptor = require('./core/apicore.js');


class class212 extends Interceptor {
	static obfuscatedClassName = "no";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class212.obfuscatedClassName);
	}

	static getField3988(){
		return new IndexedSprite(super.getField(class212.obfuscatedClassName,"am", []));
	}

	static onSprite_drawTransparent(todo){
		super.onMethodExecution(class212.obfuscatedClassName,"ar", todo, []);
	}
	static onMethod6894(todo){
		super.onMethodExecution(class212.obfuscatedClassName,"ar", todo, []);
	}
}
module.exports = class212;
