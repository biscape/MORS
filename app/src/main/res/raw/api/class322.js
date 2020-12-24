const Interceptor = require('./core/apicore.js');


class class322 extends Interceptor {
	static obfuscatedClassName = "jx";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class322.obfuscatedClassName);
	}


	static onRsOrdinal(todo){
		super.onMethodExecution(class322.obfuscatedClassName,"ak", todo, []);
	}
}
module.exports = class322;
