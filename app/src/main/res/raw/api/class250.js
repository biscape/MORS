const Interceptor = require('./core/apicore.js');
const Archive = require('./archive.js');


class class250 extends Interceptor {
	static obfuscatedClassName = "pq";
	constructor(obfuscatedObject, superName){
		super(obfuscatedObject, class250.obfuscatedClassName);
	}

	static getField4317(){
		return new Archive(super.getField(class250.obfuscatedClassName,"dq", []));
	}

}
module.exports = class250;
