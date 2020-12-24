const Interceptor = require('./core/apicore.js');


class class51 extends Interceptor {
	static obfuscatedClassName = "dk";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class51.obfuscatedClassName);
	}

	static getField2373(){
		return new class51(super.getField(class51.obfuscatedClassName,"ae", []));
	}
	static getField2374(){
		return new class51(super.getField(class51.obfuscatedClassName,"ah", []));
	}
	static getField2375(){
		return new class51(super.getField(class51.obfuscatedClassName,"ai", []));
	}
	static getField2376(){
		return new class51(super.getField(class51.obfuscatedClassName,"ak", []));
	}
	static getField2377(){
		return new class51(super.getField(class51.obfuscatedClassName,"ax", []));
	}
	getField2380(){
		return  super.getField(class51.obfuscatedClassName,"as", []);
	}

	static onMethod3746(todo){
		super.onMethodExecution(class51.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod3747(todo){
		super.onMethodExecution(class51.obfuscatedClassName,"ai", todo, []);
	}
}
module.exports = class51;
