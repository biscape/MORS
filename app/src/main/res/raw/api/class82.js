const Buffer = require('./buffer.js');
const Interceptor = require('./core/apicore.js');


class class82 extends Interceptor {
	static obfuscatedClassName = "fw";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class82.obfuscatedClassName);
	}

	static getField2622(){
		return  super.getField(class82.obfuscatedClassName,"aa", []);
	}
	static getField2623(){
		return  super.getField(class82.obfuscatedClassName,"ae", ['int', 1228850337]);
	}
	static getField2626(){
		return  super.getField(class82.obfuscatedClassName,"al", []);
	}
	static getField2627(){
		return  super.getField(class82.obfuscatedClassName,"as", []);
	}
	static getNetCache_responseArchiveBuffer(){
		return new Buffer(super.getField(class82.obfuscatedClassName,"az", []));
	}
	static getField2624(){
		return  super.getField(class82.obfuscatedClassName,"ai", ['int', 1188955959]);
	}
	static getField2625(){
		return  super.getField(class82.obfuscatedClassName,"ak", ['int', 311799683]);
	}

	static onMethod4599(todo){
		super.onMethodExecution(class82.obfuscatedClassName,"be", todo, []);
	}
}
module.exports = class82;
