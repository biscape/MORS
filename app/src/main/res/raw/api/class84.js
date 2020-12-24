const Interceptor = require('./core/apicore.js');
const class66 = require('./class66.js');


class class84 extends Interceptor {
	static obfuscatedClassName = "fy";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class84.obfuscatedClassName);
	}

	getField2638(){
		return new class66(super.getField(class84.obfuscatedClassName,"ak", []));
	}

	static onMethod4726(todo){
		super.onMethodExecution(class84.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod4729(todo){
		super.onMethodExecution(class84.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod4724(todo){
		super.onMethodExecution(class84.obfuscatedClassName,"bx", todo, []);
	}
	static onMethod4723(todo){
		super.onMethodExecution(class84.obfuscatedClassName,"bi", todo, []);
	}
}
module.exports = class84;
