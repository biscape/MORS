const IndexedSprite = require('./indexedSprite.js');
const Interceptor = require('./core/apicore.js');


class class128 extends Interceptor {
	static obfuscatedClassName = "is";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class128.obfuscatedClassName);
	}

	static getField3445(){
		return new BigInteger(super.getField(class128.obfuscatedClassName,"ah", []));
	}
	static getField3449(){
		return new BigInteger(super.getField(class128.obfuscatedClassName,"as", []));
	}
	static getField3451(){
		return new IndexedSprite(super.getField(class128.obfuscatedClassName,"az", []));
	}

	static onMethod5553(todo){
		super.onMethodExecution(class128.obfuscatedClassName,"aq", todo, []);
	}
	static onMethod5555(todo){
		super.onMethodExecution(class128.obfuscatedClassName,"av", todo, []);
	}
}
module.exports = class128;
