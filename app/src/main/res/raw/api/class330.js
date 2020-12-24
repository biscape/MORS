const IndexedSprite = require('./indexedSprite.js');
const class384 = require('./class384.js');
const Interceptor = require('./core/apicore.js');


class class330 extends Interceptor {
	static obfuscatedClassName = "ko";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class330.obfuscatedClassName);
	}

	static getField6292(){
		return  super.getField(class330.obfuscatedClassName,"am", ['int', 854459735]);
	}
	static getField6290(){
		return new IndexedSprite(super.getField(class330.obfuscatedClassName,"ad", []));
	}
	static getField6291(){
		return new class330(super.getField(class330.obfuscatedClassName,"ak", []));
	}
	static getField6293(){
		return  super.getField(class330.obfuscatedClassName,"gx", []);
	}
	getField6294(){
		return  super.getField(class330.obfuscatedClassName,"ae", ['int', 556150337]);
	}
	getField6295(){
		return  super.getField(class330.obfuscatedClassName,"ai", ['int', 2066601593]);
	}

	static onVmethod12178(todo){
		super.onMethodExecution(class330.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class330;
