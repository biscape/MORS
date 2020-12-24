const class257 = require('./class257.js');
const class265 = require('./class265.js');
const class19 = require('./class19.js');


class class261 extends class19 {
	static obfuscatedClassName = "av";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class261.obfuscatedClassName);
	}

	getField4464(){
		return new class257(super.getField(class261.obfuscatedClassName,"ae", []));
	}
	getField4465(){
		return new class265(super.getField(class261.obfuscatedClassName,"ak", []));
	}

	static onVmethod7589(todo){
		super.onMethodExecution(class261.obfuscatedClassName,"ae", todo, []);
	}
	static onVmethod7592(todo){
		super.onMethodExecution(class261.obfuscatedClassName,"ai", todo, []);
	}
	static onVmethod7594(todo){
		super.onMethodExecution(class261.obfuscatedClassName,"ak", todo, []);
	}
	static onVmethod7604(todo){
		super.onMethodExecution(class261.obfuscatedClassName,"ax", todo, []);
	}
	static onMethod7512(todo){
		super.onMethodExecution(class261.obfuscatedClassName,"aa", todo, []);
	}
	static onMethod7513(todo){
		super.onMethodExecution(class261.obfuscatedClassName,"ar", todo, []);
	}
	static onMethod7514(todo){
		super.onMethodExecution(class261.obfuscatedClassName,"ax", todo, []);
	}
}
module.exports = class261;
