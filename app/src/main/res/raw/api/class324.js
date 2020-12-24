const class64 = require('./class64.js');


class class324 extends class64 {
	static obfuscatedClassName = "ka";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class324.obfuscatedClassName);
	}

	getField6270(){
		return  super.getField(class324.obfuscatedClassName,"ae", []);
	}

	static onMethod11451(todo){
		super.onMethodExecution(class324.obfuscatedClassName,"aq", todo, []);
	}
	static onCompare(todo){
		super.onMethodExecution(class324.obfuscatedClassName,"", todo, []);
	}
	static onItemDefinition_get(todo){
		super.onMethodExecution(class324.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod11442(todo){
		super.onMethodExecution(class324.obfuscatedClassName,"ai", todo, []);
	}
	static onMethod11443(todo){
		super.onMethodExecution(class324.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod11444(todo){
		super.onMethodExecution(class324.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = class324;
