const Interceptor = require('./core/apicore.js');
const AbstractArchive = require('./abstractArchive.js');


class class165 extends Interceptor {
	static obfuscatedClassName = "ld";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class165.obfuscatedClassName);
	}

	getField3761(){
		return new AbstractArchive(super.getField(class165.obfuscatedClassName,"ae", []));
	}
	getField3762(){
		return  super.getField(class165.obfuscatedClassName,"ai", []);
	}
	getField3763(){
		return new AbstractArchive(super.getField(class165.obfuscatedClassName,"ak", []));
	}

	static onMethod6384(todo){
		super.onMethodExecution(class165.obfuscatedClassName,"ak", todo, []);
	}
	static onMethod6382(todo){
		super.onMethodExecution(class165.obfuscatedClassName,"au", todo, []);
	}
}
module.exports = class165;
