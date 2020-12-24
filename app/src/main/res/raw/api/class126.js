const Interceptor = require('./core/apicore.js');
const Archive = require('./archive.js');


class class126 extends Interceptor {
	static obfuscatedClassName = "ip";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class126.obfuscatedClassName);
	}

	static getField3437(){
		return new Archive(super.getField(class126.obfuscatedClassName,"db", []));
	}

	static onMethod5528(todo){
		super.onMethodExecution(class126.obfuscatedClassName,"dc", todo, []);
	}
}
module.exports = class126;
