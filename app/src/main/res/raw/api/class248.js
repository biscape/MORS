const TaskHandler = require('./taskHandler.js');
const Interceptor = require('./core/apicore.js');


class class248 extends Interceptor {
	static obfuscatedClassName = "pm";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class248.obfuscatedClassName);
	}

	static getField4306(){
		return new TaskHandler(super.getField(class248.obfuscatedClassName,"sy", []));
	}
	static getField4299(){
		return  super.getField(class248.obfuscatedClassName,"af", []);
	}
	static getField4297(){
		return  super.getField(class248.obfuscatedClassName,"ab", []);
	}

}
module.exports = class248;
