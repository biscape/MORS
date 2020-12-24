const class165 = require('./class165.js');
const Interceptor = require('./core/apicore.js');


class class0 extends Interceptor {
	static obfuscatedClassName = "aa";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class0.obfuscatedClassName);
	}

	static getField0(){
		return  super.getField(class0.obfuscatedClassName,"ae", []);
	}
	static getField1(){
		return  super.getField(class0.obfuscatedClassName,"ah", []);
	}
	static getField2(){
		return  super.getField(class0.obfuscatedClassName,"ai", []);
	}
	static getField3(){
		return  super.getField(class0.obfuscatedClassName,"ak", []);
	}
	static getField4(){
		return  super.getField(class0.obfuscatedClassName,"ax", []);
	}
	static getField5(){
		return new class165(super.getField(class0.obfuscatedClassName,"fh", []));
	}

	static onMethod1(todo){
		super.onMethodExecution(class0.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod2(todo){
		super.onMethodExecution(class0.obfuscatedClassName,"ah", todo, []);
	}
	static onMethod4(todo){
		super.onMethodExecution(class0.obfuscatedClassName,"az", todo, []);
	}
}
module.exports = class0;
