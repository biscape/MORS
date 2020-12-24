const Widget = require('./widget.js');
const Interceptor = require('./core/apicore.js');


class class146 extends Interceptor {
	static obfuscatedClassName = "js";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class146.obfuscatedClassName);
	}

	static getField3612(){
		return new Widget(super.getField(class146.obfuscatedClassName,"jo", []));
	}
	getField3613(){
		return  super.getField(class146.obfuscatedClassName,"ak", []);
	}

	static onMethod6042(todo){
		super.onMethodExecution(class146.obfuscatedClassName,"ak", todo, []);
	}
	static onCompare(todo){
		super.onMethodExecution(class146.obfuscatedClassName,"", todo, []);
	}
	static onEquals(todo){
		super.onMethodExecution(class146.obfuscatedClassName,"", todo, []);
	}
	static onMethod6035(todo){
		super.onMethodExecution(class146.obfuscatedClassName,"ad", todo, []);
	}
}
module.exports = class146;
