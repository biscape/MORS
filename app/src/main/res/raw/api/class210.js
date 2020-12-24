const class208 = require('./class208.js');
const Interceptor = require('./core/apicore.js');


class class210 extends Interceptor {
	static obfuscatedClassName = "nm";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class210.obfuscatedClassName);
	}

	getField3977(){
		return  super.getField(class210.obfuscatedClassName,"ae", []);
	}
	getField3979(){
		return new class208(super.getField(class210.obfuscatedClassName,"ai", []));
	}
	getField3980(){
		return  super.getField(class210.obfuscatedClassName,"ak", []);
	}
	getField3981(){
		return  super.getField(class210.obfuscatedClassName,"ax", []);
	}

	static onMethod6889(todo){
		super.onMethodExecution(class210.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class210;
