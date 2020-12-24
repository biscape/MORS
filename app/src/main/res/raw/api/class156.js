const Buffer = require('./buffer.js');
const class160 = require('./class160.js');
const Interceptor = require('./core/apicore.js');


class class156 extends Interceptor {
	static obfuscatedClassName = "km";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class156.obfuscatedClassName);
	}

	getField3740(){
		return new class160(super.getField(class156.obfuscatedClassName,"ae", []));
	}
	getField3741(){
		return new Buffer(super.getField(class156.obfuscatedClassName,"ak", []));
	}

	static onCall(todo){
		super.onMethodExecution(class156.obfuscatedClassName,"", todo, []);
	}
	static onMethod6303(todo){
		super.onMethodExecution(class156.obfuscatedClassName,"bt", todo, []);
	}
}
module.exports = class156;
