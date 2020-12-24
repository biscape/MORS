const Interceptor = require('./core/apicore.js');


class class206 extends Interceptor {
	static obfuscatedClassName = "nh";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class206.obfuscatedClassName);
	}

	getField3952(){
		return  super.getField(class206.obfuscatedClassName,"ae", ['int', 1795603485]);
	}
	getField3953(){
		return  super.getField(class206.obfuscatedClassName,"ai", []);
	}
	getField3954(){
		return  super.getField(class206.obfuscatedClassName,"ak", []);
	}
	getField3955(){
		return  super.getField(class206.obfuscatedClassName,"ax", ['int', 650376863]);
	}

	static onMethod6843(todo){
		super.onMethodExecution(class206.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod6835(todo){
		super.onMethodExecution(class206.obfuscatedClassName,"fq", todo, []);
	}
}
module.exports = class206;
