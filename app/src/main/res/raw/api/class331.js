const Interceptor = require('./core/apicore.js');


class class331 extends Interceptor {
	static obfuscatedClassName = "kp";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class331.obfuscatedClassName);
	}

	getField6297(){
		return new MessageDigest(super.getField(class331.obfuscatedClassName,"ak", []));
	}

	static onMethod11499(todo){
		super.onMethodExecution(class331.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod11500(todo){
		super.onMethodExecution(class331.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod11503(todo){
		super.onMethodExecution(class331.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod11493(todo){
		super.onMethodExecution(class331.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod11494(todo){
		super.onMethodExecution(class331.obfuscatedClassName,"ai", todo, []);
	}
}
module.exports = class331;
