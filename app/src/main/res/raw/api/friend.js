const class289 = require('./class289.js');


class Friend extends class289 {
	static obfuscatedClassName = "er";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, Friend.obfuscatedClassName);
	}

	getField7155(){
		return  super.getField(Friend.obfuscatedClassName,"ak", []);
	}
	getField7156(){
		return  super.getField(Friend.obfuscatedClassName,"ax", []);
	}

	static onVmethod13338(todo){
		super.onMethodExecution(Friend.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod13342(todo){
		super.onMethodExecution(Friend.obfuscatedClassName,"ak", todo, []);
	}
	static onCompareTo_user(todo){
		super.onMethodExecution(Friend.obfuscatedClassName,"compareTo", todo, []);
	}
	static onSprite_drawTransScaled(todo){
		super.onMethodExecution(Friend.obfuscatedClassName,"at", todo, []);
	}
}
module.exports = Friend;
