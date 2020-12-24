const Interceptor = require('./core/apicore.js');


class class295 extends Interceptor {
	static obfuscatedClassName = "fa";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class295.obfuscatedClassName);
	}

	static getField6014(){
		return new class295(super.getField(class295.obfuscatedClassName,"ae", []));
	}
	static getField6015(){
		return new class295(super.getField(class295.obfuscatedClassName,"ai", []));
	}
	static getField6016(){
		return new class295(super.getField(class295.obfuscatedClassName,"ak", []));
	}
	static getField6017(){
		return new class295(super.getField(class295.obfuscatedClassName,"ax", []));
	}
	getField6019(){
		return  super.getField(class295.obfuscatedClassName,"ah", ['int', 2116789927]);
	}

	static onVmethod12178(todo){
		super.onMethodExecution(class295.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod10878(todo){
		super.onMethodExecution(class295.obfuscatedClassName,"ai", todo, []);
	}
}
module.exports = class295;
