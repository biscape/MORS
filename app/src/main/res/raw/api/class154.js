const Interceptor = require('./core/apicore.js');


class class154 extends Interceptor {
	static obfuscatedClassName = "ki";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class154.obfuscatedClassName);
	}

	getField3711(){
		return  super.getField(class154.obfuscatedClassName,"ae", []);
	}
	getField3712(){
		return  super.getField(class154.obfuscatedClassName,"ai", []);
	}
	getField3713(){
		return  super.getField(class154.obfuscatedClassName,"ak", []);
	}

	static onMethod6273(todo){
		super.onMethodExecution(class154.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod6277(todo){
		super.onMethodExecution(class154.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class154;
