const Username = require('./username.js');
const Interceptor = require('./core/apicore.js');
const Archive = require('./archive.js');


class class61 extends Interceptor {
	static obfuscatedClassName = "en";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class61.obfuscatedClassName);
	}

	static getField2439(){
		return new Archive(super.getField(class61.obfuscatedClassName,"di", []));
	}
	getField2442(){
		return new Username(super.getField(class61.obfuscatedClassName,"ae", []));
	}

	static onVmethod13338(todo){
		super.onMethodExecution(class61.obfuscatedClassName,"ae", todo, []);
	}
	static onMethod3910(todo){
		super.onMethodExecution(class61.obfuscatedClassName,"af", todo, []);
	}
	static onCompareTo_user(todo){
		super.onMethodExecution(class61.obfuscatedClassName,"compareTo", todo, []);
	}
}
module.exports = class61;
