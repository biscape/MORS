const Interceptor = require('./core/apicore.js');
const Archive = require('./archive.js');


class class100 extends Interceptor {
	static obfuscatedClassName = "gu";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class100.obfuscatedClassName);
	}

	static getField2763(){
		return new Archive(super.getField(class100.obfuscatedClassName,"dk", []));
	}

	static onMethod4881(todo){
		super.onMethodExecution(class100.obfuscatedClassName,"ci", todo, []);
	}
}
module.exports = class100;
